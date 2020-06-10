<template>
  <div>
    <h2 class="event__title">{{getEventModal.title}}</h2>
    <div class="event__desc">
        <p>{{getEventModal.desc}}</p> 
    </div>
    <div class="event__dates">
        <div class="event__dates--title">Event Schedule</div>    
        <table class="event__dates--table">
            <thead class="event__dates--header">
                <tr>
                    <th>DAY</th>
                    <th>START</th>
                    <th>END</th>
                </tr>
            </thead>
            <tbody class="event__dates--body">
                <tr v-for="(date, index) in getEventModal.dates" :key="index">
                    <td>{{date.month}}&nbsp;{{date.day}}</td>
                    <td>{{date.start}}</td>
                    <td>{{date.end}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="event__location">
        <div class="event__location--title">Location:&nbsp;&nbsp;</div>  
        <a :href="`${getEventModal.locationLink}`" target="_blank">
            <div class="event__location--address">{{getEventModal.location}}</div>
        </a>
    </div>
    <div class="event__button-container">
        <div class="button gold--banner-ads small">Visit Profile</div>
        <div class="button gold--banner-ads small">Visit Website</div>
    </div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            getEventModal: 'modal/getEventModal'
        })
    },
    methods: {
       
    }
}
</script>

<style lang="scss" scoped>

.small {
    width: 35%;
}

.event {
    &__title {
        padding-top: 2rem;
        padding-bottom: 2rem;
        background: $color1;
        color: white;
        width: 100%;
        text-align: center;
        font-family: $font4;
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
    }

    &__dates {
        width: 100%;
        margin-bottom: 4rem;

        &--title {
            font-size: 2.5rem;
            text-align: center;
            font-family: $font4;
            margin-bottom: 2rem;
            color: $color2;
        }

        &--header {
            font-family: $font2;
            border-bottom: 2px solid $color2;
            margin-bottom: 2rem;
        }
        
        &--table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            padding: 1rem;
        }
    }

    &__desc {
        padding: 2rem;
        margin: 2rem 0;
    }

    &__button-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 2rem;
        justify-content: center;

        & > * {
            margin: 1rem;
        } 
    }

    &__location {
        display: flex;
        justify-content: space-evenly;
        align-items: baseline;
        margin-bottom: 2rem;

        &--title {
            text-transform: uppercase;
            font-family: $font4;
            font-size: 1.3rem;
            color: $color2;
        }

        &--address {
            cursor: pointer;
            text-decoration: underline;
            color: $color1;
            transition: all .4s;

            &:hover {
                color: $color2;
            }
        }
    }
}

td, th {
    padding: .5rem 1rem;
}

tr {
    width: 100%; 
    text-align: center;
}

</style>