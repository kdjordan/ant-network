<template>
  <div> 
    <div class="map-container">
      <div class="map-container__inner">
        <div class="map-container__left">
          <Map class="map" />
        </div>
        <div class="map-container__right">
          <FeaturedEvents />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map'
import Sponsers from '@/components/Sponsers'
import FeaturedEvents from '@/components/sub/FeaturedEvents'
import { mapSettings } from '../static/constants/mapSettings'

export default {
  transition: 'fade',
  components: {
    Map,
    Sponsers,
    FeaturedEvents,
  },
}
</script>

<style lang="scss" scoped>

.map-container {
  padding: 3rem 1rem 4rem 1rem;
  width: 100%;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 180rem;
    margin: 0 auto;
  }
  
  &__left {
    width: 70%;
  }

  &__right {
    min-width: 40rem;
  }
}

.map {
  height: 50rem;
}


</style>
 