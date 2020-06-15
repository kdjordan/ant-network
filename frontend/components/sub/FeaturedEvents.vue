<template>
<div>
    <div class="events__container p__t--2">
      <h3 class="homepage">Featured Events</h3>
      <div class="events__container--image-container">
        <a :href="`${getFeaturedEvent.featuredLink}`" target="_blank"> 
            <transition name="fade" mode="out-in">
                <img :src="`${getFeaturedEvent.featuredImgUrl}`" 
                alt="" class="events__container--img" 
                :key="`${getEventPage}`">
            </transition> 
        </a>
      </div>
    
        <div class="events__indicators">
            <img src="~assets/svg/minus.svg" alt="" @click="pageLeft">
            <div class="events__indicators--block-container">
                <div v-for="(num, index) in getFeaturedEvents.slice(0, getFeaturedEvents.length)" 
                    :key="index" 
                    class="events__indicators--block"  
                    :class="{indicator: getEventPage == `${index}`}">
                </div>

            </div>
            <img src="~assets/svg/plus.svg" alt="" @click="pageRight">
        </div>
    
    <div class="button button--primary w-50 m__b--2 p__t--3" @click.stop="doModal">Add My Event</div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
    ...mapGetters({
        getFeaturedEvents: 'events/getFeaturedEvents',              
        getFeaturedEvent: 'events/getFeaturedEvent',        
        getEventPage: 'events/getEventPage'        
    })
  },
  methods: {
        pageRight() {
            this.$store.commit('timers/resetInterval', 'events')
            this.$store.commit('events/pageRight') 
        },
        pageLeft() {
            this.$store.commit('timers/resetInterval', 'events')             
            this.$store.commit('events/pageLeft')             
        },
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'event')
        }
    },
    mounted() {
        if(!(this.$store.state.timers.events.running)) {
            this.$store.dispatch('timers/startCycleEvents')
        }
    }

}
</script>

<style lang="scss" scoped>

.homepage {
    background: $color2;
    font-size: 3rem;
    color: white;
    padding: 1.5rem 4rem;
    margin-top: 0;
}


.indicator {
    background: $color1 !important;
}

.events {
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        &--image-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            height: 35rem;
        }
    }

    &__indicators {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 2.1rem;

        & img {
            height: 3rem;
            cursor: pointer;
            transition: all .4s;

            &:hover {
                filter: opacity(50%);
            }
        }

        &--block-container {
            display: flex;
            margin-bottom: 2rem;
        }
        
        &--block {
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 2rem;
            background: $color2;
            margin: 0rem .5rem;
            margin-top: 2rem;
        }
    }
}

</style>