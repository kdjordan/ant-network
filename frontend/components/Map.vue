<template>
    <GoogleMapLoader
        :mapConfig="mapConfig"
        apiKey=MAP_KEY>

        <template slot-scope="{ google, map }">
            <GoogleMapMarker
                v-for="marker in getMarkers"
                :key="marker.id"
                :marker="marker"
                :google="google"
                :map="map"
                :info="marker.info"
            />
        </template>
    </GoogleMapLoader>
   
</template>

<script>
import GoogleMapLoader from './sub/GoogleMapLoader'
import GoogleMapMarker from './sub/GoogleMapMarker'
import { mapSettings } from '@/static/constants/mapSettings'
import { mapGetters } from 'vuex'

export default {
    components: {
    GoogleMapLoader,
    GoogleMapMarker
  },
  data() {
      return {
          MAP_KEY: process.env.MAP_KEY
      }
  },
  computed: {
    ...mapGetters({
      getMarkers : 'mapMarkers/getMarkers'
    }), 
    mapConfig () {
      return {
        ...mapSettings,
        center: { lat: 41.8780, lng: -93.0977 }
      }
    },
    mapCenter() {
        return this.markers[1].position;
    }
  },
  methods: {
    test() {
      console.log('clicked')
    }
  }

}
</script>

<style>

</style>