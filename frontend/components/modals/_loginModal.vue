<template>
  
  <div class="inner-modal">
      <h2 class="inner-modal__title font-reduce">Login / Register</h2>
      <!-- <h4 class="inner-modal__desc font-reduce center">
        <span class="select-function" :class="{under: theFunction == 'login'}" @click.prevent="swapFunction('login')">Login</span> | 
        <span class="select-function" :class="{under: theFunction == 'register'}" @click.prevent="swapFunction('register')">SignUp</span>
      </h4> -->
      <div class="inner-modal__desc center secondary-color" >{{message}}</div>
      <div>
        <!-- signup -->
        <div v-if="theFunction == 'register'" class="form-container">
          <form v-if="step == steps.register" @submit.prevent="register" class="login-form">
            <div><input v-model="registerForm.shopname" type="text" placeholder="Shop Name" class="form-control"></div>
            <div><input v-model="registerForm.email" type="email" placeholder="Email" class="form-control"></div>
            <div><input v-model="registerForm.password" type="password" placeholder="Password" class="form-control"></div>
            <div>
              <button type="submit" class="register-button m__t--2">Register</button>
            </div>
          </form>
          
          <form v-else @submit.prevent="confirm" class="login-form">
            <input v-model="confirmForm.email" type="email" placeholder="Email" class="form-control">
            <input v-model="confirmForm.code"  placeholder="Code" class="form-control">
            <button type="submit" class="register-button m__t--2">Confirm</button>
          </form>
          <div class="center">Have and account ?<br /> <span @click="swapFunction('login')" class="form-control-a">Login</span></div>
        </div>

        <!-- login -->
        <div v-if="theFunction == 'login'" class="form-container">
          <form v-if="step == steps.login" @submit.prevent="login" class="login-form">
            <input v-model="loginForm.email" type="email" placeholder="Email" class="form-control">
            <input v-model="loginForm.password" type="password" placeholder="Password" class="form-control">
            <button type="submit" class="register-button m__t--2">Login</button>
          </form>
          <div class="center"> Need an account ?<br /> <span @click="swapFunction('register')" class="form-control-a">Create Account</span></div>
        </div>

      </div>
  </div>

    <!-- need is user is not logged in panel
    if user is logged in - have a goto profile link -->
      
</template>

<script>

const steps = {
  register: 'REGISTER',
  confirm: 'CONFIRM',
  login: 'LOGIN'
}
export default {
  data() {
    return {
      theFunction: 'login',
      message: 'You are not logged in.',
      steps: { ... steps},
      step: steps.login,
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
        this.step = steps.register
      } 
      if(func == 'login') {
        this.message = "You are not logged in."
        this.theFunction = 'login'
        this.step = steps.login
      }
    },
    async login() {
      try {
        await this.$store.dispatch('auth/login', this.loginForm)
        let user = this.$store.getters['auth/getUser']
        console.log(user)
        this.message = 'Success ! Redirecting...'
        setTimeout(() => {
          this.$store.commit('modal/setModalActive')
          this.message = ''
          console.log("The Logged is ", `${user.attributes['custom:shopName']}`)
          this.$router.push(`/dealer/${user.attributes['custom:shopName']}`)
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
        this.step = this.steps.confirm
        this.message = 'Check your email for your confirmation code !'
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
        this.message = 'Success - you have been confirmed. Redirecting...'
        setTimeout(() => {
          this.$store.commit('modal/setModalActive')
          this.message = ''
          this.$router.push(`/dealer/${user.username}`)
        }, 3000)
        // this.$store.dispatch('modal/setModalActive')
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