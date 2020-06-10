<template>
  <div class="carousel">
      <h3>Featured Events</h3>
      <div class="underline short"></div>
      <div class="button button--primary w-50  m__b--3" @click.stop="doModal">add my featured event</div>
      <div class="carousel__container">
          <img src="~assets/svg/minus.svg" alt=""  class="indicator"  @click="carouselLeft">
          <div class="carousel__container--images">
            <div class="image" @click="showEvent(getCarouselImages[getIndicies.first])" :class="{slideLeft: getSlideLeft, slideRight: getSlideRight, slide: !getSlideRight && !getSlideLeft}">
                
                    <img :src="`${getCarouselImage(getIndicies.first).featuredImgUrl}`" alt="">

            </div>
            <div class="image" @click="showEvent(getCarouselImages[getIndicies.second])" :class="{slideLeft: getSlideLeft, slideRight: getSlideRight, slide: !getSlideRight && !getSlideLeft}">
                
                <img :src="`${getCarouselImage(getIndicies.second).featuredImgUrl}`" alt="">
                
            </div>
            <div class="image" @click="showEvent(getCarouselImages[getIndicies.third])" :class="{slideLeft: getSlideLeft, slideRight: getSlideRight, slide: !getSlideRight && !getSlideLeft}">
                
                <img :src="`${getCarouselImage(getIndicies.third).featuredImgUrl}`" alt="">
                
            </div>
            <div class="image" @click="showEvent(getCarouselImages[getIndicies.fourth])" :class="{slideLeft: getSlideLeft, slideRight: getSlideRight, slide: !getSlideRight && !getSlideLeft}">
                
                <img :src="`${getCarouselImage(getIndicies.fourth).featuredImgUrl}`" alt="">
                
            </div>
          </div>
          <img src="~assets/svg/plus.svg" alt=""  class="indicator"  @click="carouselRight">
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            getCarouselImages: 'events/getCarouselImages',
            getIndex: 'events/getCarouselIndex',
            getIndicies: 'events/getCarouselIndicies',
            getDoSlide: 'events/getDoSlide',
            getSlideRight: 'events/getSlideRight',
            getSlideLeft: 'events/getSlideLeft'
        }),
        getCarouselImage(index) {
            return index => this.getCarouselImages[index]
        },
    },
    methods: {
        carouselRight() {
            this.$store.commit('timers/resetInterval', 'carousel')
            this.$store.commit('events/carouselRight')
        },
        carouselLeft() {
            this.$store.commit('timers/resetInterval', 'carousel')
            this.$store.commit('events/carouselLeft')
        },
        showEvent(event) {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'singleEvent')
            this.$store.commit('modal/setEventModal', event)
        },
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'event')
        }
    },
    mounted() {
        if(!(this.$store.state.timers.carousel.running)) {
            this.$store.dispatch('timers/startCycleCarousel')
        }
    }
}
</script>

<style lang="scss" scoped>

.slide {
    transform: translateX(0);
    transition: all .4s;

    &Right{
        transform: translateX(100%);
    }

    &Left {
        transform: translateX(-109%);
    }
}

.hide {
    display: none;
}

.short {
    width: 60%;
}

.indicator {
    cursor: pointer;
    width: 3rem;
}

.w-50 {
    margin: 0 auto;
    width: 25rem;
    margin-bottom: 2rem;
}

.image {
    cursor: pointer;
    margin: 0 1.5rem;

    & img {
        width: 100%;
        max-width: 60rem;
        height: auto;
        max-height: 40rem;
    }
}

.carousel {
    width: 100%;
    height: 45rem;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 auto;
    }

    &__container--images {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
    }
}

</style>