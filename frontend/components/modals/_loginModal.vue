<template>
  
  <div class="inner-modal">
      <h2 class="inner-modal__title font-reduce">Login / Register</h2>
      {{theFunction}}
      <div v-if="theFunction == 'confirm'" class="inner-modal__desc center secondary-color" >{{message}}<br/> 
        Click <span @click.prevent="resendCode" class="under">here</span> to resend the code
      </div>
      <div v-else class="inner-modal__desc center secondary-color" >{{message}}</div>
        <!-- signup -->
        <div v-if="theFunction == 'register'" class="form-container">
          <form @submit.prevent="register" class="login-form">
            <div><input v-model="registerForm.shopname" type="text" placeholder="Shop Name" class="form-control"></div>
            <div><input v-model="registerForm.email" type="email" placeholder="Email" class="form-control"></div>
            <div><input v-model="registerForm.password" type="password" placeholder="Password" class="form-control"></div>
            <div><button type="submit" class="register-button m__t--2">Register</button></div>
            <div class="center">Have and account ? <span @click="swapFunction('login')" class="form-control-a">Login</span></div>
            <div class="center">Need to Confirm ? <span @click="swapFunction('confirm')" class="form-control-a">Confirm</span></div>
          </form>
        </div>
        <!-- confirm -->
        <div v-if="theFunction == 'confirm'" class="form-container">
          <form @submit.prevent="confirm" class="login-form">
            <div><input v-model="confirmForm.email" type="email" placeholder="Email" class="form-control"></div>
            <div><input v-model="confirmForm.code"  placeholder="Code" class="form-control"></div>
            <div><button type="submit" class="register-button m__t--2">Confirm</button></div>
          </form>
          <div class="center">Have and account ? <span @click="swapFunction('login')" class="form-control-a">Login</span></div>
          <div class="center">Need to Confirm ? <span @click="swapFunction('confirm')" class="form-control-a">Confirm</span></div>
        </div>
        <!-- login -->
        <div v-if="theFunction == 'login'" class="form-container">
          <form @submit.prevent="login" class="login-form">
            <input v-model="loginForm.email" type="email" placeholder="Email" class="form-control">
            <input v-model="loginForm.password" type="password" placeholder="Password" class="form-control">
            <button type="submit" class="register-button m__t--2">Login</button>
          </form>
          <div class="center"> Need an account ?<br /> <span @click="swapFunction('register')" class="form-control-a">Create Account</span></div>
        </div>

  </div>
  

    <!-- need is user is not logged in panel
    if user is logged in - have a goto profile link -->
      
</template>

<script>
export default {
  data() {
    return {
      theFunction: 'register',
      message: 'Fill Out the Form to Sign Up !',
      // steps: { ... steps},
      // step: steps.register,
      registerForm: {
        email: '',
        password: '',
        shopname: ''
      },
      confirmForm: {
        email: '',
        code: ''
      },
      loginForm: {
        email: '',
        password: ''
      }

    }
  },
  methods: {
    swapFunction(func) {
      if(func == 'register') {
        this.message = 'Who are You ?'
        this.theFunction = 'register'
      } 
      if(func == 'login') {
        this.message = "You are not logged in."
        this.theFunction = 'login'
      }
      if(func == 'confirm') {
        this.message = 'Enter Your email and Confirmation Code.'
        this.theFunction = 'confirm'
      }
    },
    async resendCode() {
      try {
        console.log('calling')
        this.$store.dispatch('auth/resendCode', this.registerForm.email)
        this.message = 'Auth code Resent, Check your spam folder !'
        //change to confirm
      } catch(e) {
          this.message = `Error: ${e.message}`
          console.log("ERROR resending code ", e) 
      }
    },
    async login() {
      try {
        await this.$store.dispatch('auth/login', this.loginForm)
        let user = this.$store.getters['auth/getUser']
        this.message = 'Success ! Redirecting...'
        setTimeout(() => {
          this.$store.commit('modal/setModalActive')
          this.message = ''
          this.$router.push(`/auth/${user.attributes['custom:shopName']}`)
        }, 2000)
      } catch (e) {
        this.message = `Error: ${e.message}`
        console.log("ERROR loggin in ", e) 
      }    
    },
    async register() {
      try {
        await this.$store.dispatch('auth/register', this.registerForm)
        this.confirmForm.email = this.registerForm.email
        this.theFunction = 'confirm'
        this.message = `Success ! Your auth was emailed to you.`
      } catch (e) {
        this.message = `Error: ${e.message}`
        console.log("ERROR in register", e) 
      }
    },
    async confirm() {
      try {
        await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
        await this.$store.dispatch('auth/login', this.registerForm)
        let user = this.$store.getters['auth/getUser']
        console.log(user)
        this.message = 'Success - you have been confirmed. Redirecting...'
        setTimeout(() => {
          this.$store.commit('modal/setModalActive')
          this.message = ''
          this.$router.push(`/auth/${user.attributes['custom:shopName']}`)
        }, 3000)
      } catch (e){
        this.message = `Error: ${e.message}`
        console.log("ERROR in confirm", e) 
      }    
    }
  }
}
</script>

<style lang="scss" scoped>

.center {
  text-align: center;
}

.secondary-color {
  color: $color2;
}

.under {
  text-decoration: underline;
  cursor: pointer;
  transition: all .4s;

  &:hover {
    text-decoration: none;
  }
}

.select-function {
  cursor: pointer;
  transition: all .4s;

  &:hover {
    filter: opacity(50%)
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-control {
  display: block;
  margin: .5rem 0;

  &-a {
    text-decoration: underline;
    cursor: pointer;
    transition: all .4s;

    &:hover {
      text-decoration: none;
    }
  }
}

.center {
  text-align: center;
}

</style>