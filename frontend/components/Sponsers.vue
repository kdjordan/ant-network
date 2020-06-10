<template>
<div>
  <div class="sponsers">
      <div class="sponsers__top">
          <div class="sponsers__top--title">Make Sure to Visit Our Sponsers !</div>
          <div class="underline white"></div>
          <div class="button button--trans" @click.stop="doModal">become a sponser</div>
      </div>
      <div class="sponsers__bottom">
        <div v-for="(sponser, index) in getSponsers" :key="index">
            <img :src="`${sponser.url}`" :alt="`${sponser.name}`" class="sponsers__image">        
        </div>
      </div>
  </div>
</div>
</template>

<script>


import { mapGetters } from 'vuex'

export default {
    
computed: {
    ...mapGetters({
        getSponsers: 'sponsers/getSponsers'
    }),
     
},
methods: {
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'sponser')
        }
    }
}
</script>

<style lang="scss" scoped>

.white {
    width: 70%;
    border: none;
    border-bottom: 4px solid white !important;
}

.sponsers {
    margin: 5rem 0;
    background: $color2;

        &__top {
            width: 100%;
            margin: 0 auto;
            padding: 4rem 0 2rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;

            &--title {
                color: white;
                text-align: center;
                font-size: 4rem;
                font-family: $font4;
                margin-bottom: 2rem;
               
            }
            
        }

        &__bottom {
            padding: 2rem 0 4rem 0;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

    & h3 {
        font-family: $font4;
       
    }

    &__image {
        max-width: 25rem;
    }
}
</style>