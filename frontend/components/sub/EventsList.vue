<template>
  <div class="list">
        <div v-for="(event, index) in events" :key="index" class="listings">
            <div class="card" @click="showEvent(event)">
                <div class="card__date">
                    <div class="card__date--month">
                        {{event.dates[0].month}}
                    </div>
                    <div class="card__date--day">
                        {{event.dates[0].day}}<span v-if="event.dates.length > 1">-</span>
                    </div>
                </div>
                <div class="card__details">
                    <div class="card__details--title">
                        {{event.title}}
                    </div>
                    <div class="card__details--desc">
                        {{event.desc}}
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    props: ['events'],
    methods: {
        showEvent(event) {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'singleEvent')
            this.$store.commit('modal/setEventModal', event)
        }
    }
}
</script>

<style lang="scss" scoped>

.list {
    display: flex;
    flex-direction: column;
}

.listings {
    cursor: pointer;
    border-bottom: 2px solid $color1;
    transition: all .4s;

    &:hover {
        background: rgba(205, 205, 205, .4);
    }
}

.card {
    font-family: $font2;
    display: flex;
    align-items: center;
    color: $color2;
    padding: 0 .5rem;
    margin: .5rem 0;

    &__date {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid $color1;
        margin-right: 1rem;
        align-self: flex-start;

        &--month {
            text-transform: uppercase;
            color: white;
            background: $color1;
            padding: .2rem .4rem;
        }

        &--day {
            margin: .5rem 0;
            color: $color1;
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        color: $color1;
        

        &--title {
            align-items: flex-start;
            font-size: 2.2rem;
            margin-bottom: .2rem;
            font-weight: bold;
        }

        &--time {
            color: $color1;
            font-size: 1.2rem;
            
            & span {
                color: $color1;
            }

            &-details {
                font-size: 1.8rem;
            }
        }
    }

    &__more {
        cursor: pointer;
        font-size: 1rem;
        color: white;
        background: $color2;
        border: 2px solid $color2;
        border-radius: 1rem;
        align-self: flex-start;
        padding: 0 .5rem;
        transition: all .4s;
    }

    &__more:hover {
        background: transparent;
        color: $color2;
        border: 2px solid $color2;
    }
}

.controls {
    cursor: pointer;
    filter: opacity(80%);
    width: 8rem;
    transition: all .4s;

    &:hover,
    &:active {
        filter: opacity(40%);
    }
}
</style>