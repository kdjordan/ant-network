<template>
<div class="alerts">       
    <a :href="`${getAlerts.ref}`" target="_blank">
        <div class="alerts__container">
            <div class="alerts__button" :style="{background: getBackground}">
                New {{getAlerts.type}} Alert : <span class="alerts__button--name">{{getAlerts.mssg}}</span>
            </div>
        </div>
    </a> 
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({ 
            getAlerts: 'alerts/getAlerts'
        }),
        getBackground() {
            switch (this.getAlerts.type) {
                case 'shop':
                    return '#a53b2d'
                    break
                case 'event':
                    return '#5397C2'
                    break
                case 'winery':
                    return '#56b4a6'
                    break
                case 'brewery':
                    return '#f79f24'
                    break
                case 'lodging':
                    return '#6bb487'
                    break
                case 'other':
                    return '#2da56a'
                    break
                case 'food':
                    return '#d96536'
                    break
                default:
                    return 'transparent'
            }
        }
    },
    mounted() {
        if(!(this.$store.state.timers.events.running)) {
            this.$store.dispatch('timers/startCycleAlerts')
        }
    }

}
</script>

<style lang="scss" scoped>

.alerts {
    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    &__button {
        text-align: center;
        padding: .8rem 1.5rem;
        background: $shop;
        color: white;
        border: 2px solid white;
        border-radius: 2rem;
        text-transform: uppercase;
        font-family: $font2;
        font-size: 1.3rem;
        font-weight: bold;
        transition: all .4s;

        &--name {
            text-transform: none;
            font-style: italic;
            font-size: 1.9rem;
            font-family: $font4;
        }

        &:hover {
            color: $liteGrey;
        }
    }
}
</style>