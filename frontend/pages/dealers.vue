<template>
  <div>
    <EventsCarousel />
    <div class="dealers">
      <h3>Dealers</h3>
      <div class="underline"></div>
      <div class="button button--primary w-50">become a dealer</div>
        <div class="instruct">"click" on Dealer for details : "scroll" for more Dealers</div>
        <div class="filter-container">
          <div class="filter-container__left search">
            <input type="text" placeholder="Search by Name...">
            <img role="img" src="~assets/svg/mag-glass.svg" alt="">
          </div>
          <div class="filter-container__right search">
            <!-- <label class="p__b--1" for="cities">Search by City...</label> -->
            <select id="cities" name="cities">
              <option placeholder value="Select City">Select City</option>
              <option v-for="(city, index) in getCities" :key="index" :value="`${city}`">
                {{city}}
              </option>
            </select>
          </div>
        </div>
      <div class="dealers__container">
        <div v-for="(dealer, index) in getDealers" :key="index" class="dealers__listing">
          <div class="dealers__listing--inner">
            <img :src="`${dealer.image}`" alt="" class="dealers__listing--img">
            <div class="dealers__info">
              <div class="dealers__info--title">{{dealer.name}}</div>
              <div class="dealers__info--desc">{{dealer.desc}}</div>
              <div class="dealers__info--loc">LOCATION : {{dealer.location}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- ::{{getCities}} -->
  </div>
</template>

<script>
import EventsCarousel from '@/components/sub/EventsCarousel'
import Search from '@/components/sub/Search'
import { mapGetters } from 'vuex' 

export default {

  transition: 'fade',
  components: {
    EventsCarousel,
    Search
  },
  computed: {
    ...mapGetters({
      getDealer: 'dealers/getDealer',
      getDealers: 'dealers/getDealers',
      getCities: 'dealers/getCities'
    })
  }

}
</script>

<style lang="scss" scoped>

.w-50 {
  width: 20%;
  margin: 0 auto;
  margin-bottom: 2rem
}

.instruct {
  color: $color1;
  font-weight: bold;
  text-transform: uppercase;
  border-left: 4px solid $color1;
  border-right: 4px solid $color1;
  border-radius: 1rem;
  padding: 0 1rem;
}

.filter-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  margin-top: 1rem;
  padding: 2rem 0;
  background: $color2;
  color: white;

  &__left {
    width: 30%;
    margin-left: 5%;
  }
  &__right {
    width: 30%;
    margin-right: 5%;

    & label {
      margin-bottom: .5rem;
    }
  }
}

.dealers {
    display: flex;
    flex-direction: column;
    align-items: center;

  &__container {
    width: 80%;
    margin: 0 auto;
    border: 2px solid $color2;
    overflow: auto;
    height: 60rem;
    padding: .5rem 0;
  }

  &__listing {
    border-bottom: 2px solid $color1;
    cursor: pointer;

    &--img {
      // height: 12rem;
      width: 12rem;
    }

    &--inner {
      display: flex;
      align-items: center;
      padding: 1rem;
    }

    &:hover {
        background: rgba(205, 205, 205, .4);
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-content: stretch;
    justify-content: space-between;
    color: $color1;
    margin-left: 1rem;

    &--title {
      text-transform: uppercase;
      font-size: 1.7rem;
      font-weight: bold;
    }
  }


}
</style>