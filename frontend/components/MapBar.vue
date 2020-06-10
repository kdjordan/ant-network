<template>

<div class="alert">
    <div class="alert__container">
        <div class="alert__left">
            <Search />
        </div>
        <div class="alert__right">
            <div class="button button--trans" @click.stop="doModal()">Add My Business</div>
            <div class="button button--trans" @click.stop="doModal()">View Full Map</div>
        </div>
    </div>
</div>

</template>

<script>
import Alerts from '@/components/sub/Alerts'
import Search from '@/components/sub/Search'

export default {
    components: {
        Search
    },
    methods: {
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'map')
        }
    }
}
</script>

<style lang="scss" scoped>

.alert {
    background: $color2;

    &__container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }

    &__right {
        display: flex;
        justify-content: space-around;
        width: 50%;
    }
}
</style>