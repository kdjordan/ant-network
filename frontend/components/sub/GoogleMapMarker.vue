<script>
import { POINT_MARKER_ICON_CONFIG } from "@/static/constants/mapSettings"

export default {
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    marker: {
      type: Object,
      required: true
    }
  },

  mounted() {
    const { Marker } = this.google.maps
    const { infoWindow } = this.google.maps

    let contentString = '<div class="content">'+
      `<h1 class="content__name">${this.marker.info.name}</h1>`+
      `<div class="content__address">${this.marker.info.address}</div>`+
      `<div class="content__directions"><a href="${this.marker.info.directions}" target="_blank">Get Directions</a></div>`+
      `<div class="content__hours">:: HOURS ::</div>`+
      `<div class="content__hours--details">${this.marker.info.hours}</div>`+
      '</div>';

    let info = new google.maps.InfoWindow({
    content: contentString
  });

    let markerURL

    switch(this.marker.info.type) {
      case 'shop':
        markerURL = POINT_MARKER_ICON_CONFIG.antique
        break;
      case 'food':
        markerURL = POINT_MARKER_ICON_CONFIG.food
        break;
      case 'winery':
        markerURL = POINT_MARKER_ICON_CONFIG.winery
        break;
      case 'brewery':
        markerURL = POINT_MARKER_ICON_CONFIG.brewery
        break;
      case 'lodging':
        markerURL = POINT_MARKER_ICON_CONFIG.lodging
        break;
      case 'other':
        markerURL = POINT_MARKER_ICON_CONFIG.other
        break;
      default :
        markerURL = POINT_MARKER_ICON_CONFIG.other
    }

    
    let marker = new Marker({
      position: this.marker.position,
      marker: this.marker,
      map: this.map,
      icon: {
        url : markerURL
      }
    });

    marker.addListener('click', (event) => {
      info.open(this.google.maps, marker)
      console.log(this.marker.position)
        })
        return marker;
  },

  render() {}
};
</script>

<style lang="scss">

.content {
  text-align: center;

  &__name {
    font-size: 2rem;
    color: $color1;
  }

  &__address {
    font-size: 1.3rem;
  }

  &__directions {
    font-size: 1.2rem;
    font-family: $font2;
    margin: .3rem 0;


    & a {
      padding: 0 .3rem;
      border: 2px solid $color2;
      color: $color2;
      transition: all .4s;
    }

    & a:hover {
      filter: opacity(50%);
    }
  }

  &__hours {
    font-family: $font2;
    color: $color1;
  }

}
  
</style>
