<template>
  <div>
    <MapBar /> 
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
    <div class="legend">
      <div class="legend__flags-container">
        
          <div class="legend__flags-container--entry">
            <img src="~/assets/icons/antique.png" alt="">
            <div class="legend__flags-container--title">Shops</div>
          </div>

           <div class="legend__flags-container--entry">
            <img src="~/assets/icons/food.png" alt="">
            <div class="legend__flags-container--title">Food</div>
          </div>
          
          <div class="legend__flags-container--entry">
            <img src="~/assets/icons/winery.png" alt="">
            <div class="legend__flags-container--title">Winery</div>
          </div>

          <div class="legend__flags-container--entry">
            <img src="~/assets/icons/brewery.png" alt="">
            <div class="legend__flags-container--title">Brewery</div>
          </div>


           <div class="legend__flags-container--entry">
            <img src="~/assets/icons/lodging.png" alt="">
            <div class="legend__flags-container--title">Lodging</div>
          </div>

          <div class="legend__flags-container--entry">
            <img src="~/assets/icons/other.png" alt="">
            <div class="legend__flags-container--title">Other</div>
          </div>
       
      </div>
    </div>
    
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader"
import MapBar from '@/components/MapBar'

export default {
  components: {
    MapBar
  },
  props: {
    mapConfig: Object,
    apiKey: String
  },

  data() {
    return {
      google: null,
      map: null
    };
  },
   methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },
    doModal() {
        this.$store.commit('modal/setModalActive')
        this.$store.commit('modal/setModalType', 'map')
      }
    },
    async mounted() {
      const googleMapApi = await GoogleMapsApiLoader({
        apiKey: process.env.MAP_KEY
      });
      
      this.google = googleMapApi;
      this.initializeMap();
    },
};
</script>

<style lang="scss" scoped>




h3 {
    font-size: 3rem;
    font-family: $font4;
    color: $color1;
    text-align: center;
}

.legend {
  padding: 1rem 0;
  font-family: $font1;
  margin-bottom: 3rem;
  background: $color2;
  border: 2px solid $color2;
  border-top: none;
  
  &__flags-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;

    &--entry {
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        width: 4rem;
      }
    }

    &--title {
      color: white;
      margin-left: .3rem;
      font-size: 1.5rem;
    }
  }
}

.google-map {
  width: 100%;
  min-height: 100%;
}
</style>
