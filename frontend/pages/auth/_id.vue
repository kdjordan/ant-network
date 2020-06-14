<template>
  <div class="dealer__container">

      <h1>Dealers  Page</h1>
      <h2>Welcome back {{!$auth.isAuthenticated}}</h2>
        <h4>Upload an image</h4>
      <form @submit.prevent>
          <input type="file" accept="image/*">
          <input type="text" v-model="image.desc" placeholder="Description">
          <button type="submit">Submit</button>
      </form>
      <button @click.prevent="details">Details</button>
        <h4>Your Images</h4>
        {{profile}}
          <!-- image Grid v-for  -->
  </div>
</template>

<script>
export default {
    transition: 'fade',
    layout: "dealerProfile",
    data() {
        return {
            profile: '',
            image: {
                desc: ''
            }

        }
    },
    methods: {
        details() {
            console.log(this.$store.state.auth.user)
        }
    },
    computed: {
        getUser() {
            // return this.$store.state.auth.user.attributes['custom:shopName']x
            return 'bugaloo'
        }
    },
    async beforeCreate() {
        try {
            console.log("before")
            const jwt = this.$auth.user.signInUserSession.idToken.jwtToken
            console.log("JWT", jwt)
            let profile = await this.$axios.get('https://pz39j5z4eg.execute-api.us-west-2.amazonaws.com/dev/profile',
            { headers: { Authorization: `Bearer ${jwt}` } })
            
            this.profile = profile.data.profile.Items
        } catch(e) {
            console.log(e)
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