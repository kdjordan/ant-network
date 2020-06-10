<template>
  <div>
    <!-- need is user is not logged in panel
    if user is logged in - have a goto profile link -->
      <div>
        <p>IS THIS :: {{ $auth.email }}</p>
        <form v-if="step == steps.register" @submit.prevent="register">
          <input v-model="registerForm.email" type="email" placeholder="Email" class="form-control">
          <input v-model="registerForm.password" type="password" placeholder="Password" class="form-control">
          <button type="submit">Register</button>
        </form>
        <form v-else @submit.prevent="confirm">
          <input v-model="confirmForm.email" type="email" placeholder="Email" class="form-control">
          <input v-model="confirmForm.code"  placeholder="Code" class="form-control">
          <button type="submit">Confirm</button>
        </form>
        <nuxt-link to="/login">Have and account ? Login</nuxt-link>
      </div>
  </div>
</template>

<script>
import { log } from 'util'
const steps = {
  register: 'REGISTER',
  confirm: 'CONFIRM'
}
export default {
  data() {
    return {
      steps: { ... steps},
      step: steps.register,
      registerForm: {
        email: '',
        password: ''
      },
      confirmForm: {
        email: '',
        code: ''
      }

    }
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('auth/register', this.registerForm)
        this.confirmForm.email = this.registerForm.email
        this.step = this.steps.confirm
      } catch (e) {
        console.log("ERROR in register", e) 
      }
    },
    async confirm() {
      try {
        await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
        await this.$store.dispatch('auth/login', this.registerForm)
        // this.$store.dispatch('modal/setModalActive')
      } catch (e){
        console.log("ERROR in confirm", e) 
      }    
  }
},
created() {
  // console.log("auth is", $auth)
}
}
</script>

<style>

</style>