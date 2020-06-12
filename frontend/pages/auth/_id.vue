<template>
  <div class="dealer__container">

      <h1>Dealers  Page</h1>
      <h2>Welcome back {{this.$route.params.id}}</h2>
        <h4>Upload an image</h4>
      <form @submit.prevent>
          <input type="file" accept="image/*">
          <input type="text" v-model="image.desc" placeholder="Description">
          <button type="submit">Submit</button>
      </form>
      <button @click.prevent="details">Details</button>
        <h4>Your Images</h4>
          <!-- image Grid v-for  -->
  </div>
</template>

<script>
export default {
    transition: 'fade',
    layout: "dealerProfile",
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
            console.log(this.$store.state.auth.user)
        }
    },
    computed: {
        getUser() {
            // return this.$store.state.auth.user.attributes['custom:shopName']x
            return 'bugaloo'
        }
    },
    beforeCreate() {
        // this.shopName = this.$store.state.auth.user.attributes['custom:shopName']
        // console.log(this.$store.state.auth.user.attributes["custom:shopName"])
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