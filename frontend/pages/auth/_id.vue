<template>
  <div class="dealer__container">

      <h1>Dealers  Page</h1>
      <!-- <h2>Logged in :  {{$auth.isAuthenticated}}</h2> -->
      <h2>Welcome back {{getShopName}}</h2>
        <h4>Upload an image</h4>
      <form @submit.prevent>
          <input type="file" accept="image/*">
          <input type="text" v-model="image.desc" placeholder="Description">
          <button type="submit">Submit</button>
      </form>
      <button @click.prevent="details">Get Uopload URL</button>
        <h4>Your Images</h4>
        {{shopName}}
          <!-- image Grid v-for  -->
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import { mapGetters } from 'vuex'

export default {
    transition: 'fade',
    // middleware: 'auth-admin',
    layout: "dealer",
    data() {
        return {
            shopName: '',
            image: {
                desc: ''
            }

        }
    },
    methods: {
        details() {
            console.log(this.$store.state.awsAuth.user)
        }
    },
    computed: {
    ...mapGetters({
      getUserId: 'awsAuth/getUser',
      getIsAuth: 'awsAuth/isAuthenticated',
      getShopName: 'awsAuth/getShopName'
    })
  },
  created() {
      if(!this.getIsAuth || !(this.$store.state.awsAuth.user.attributes['custom:shopName'] == this.$route.path.split('/')[2])) {
          console.log('shit')
          this.$router.push('/')
      }
  }
}
</script>

<style lang="scss" scoped>

input {
    display: block;
}
.dealer {
    
    &__container {
        height: 60vh;
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: red;
    }
}

</style>