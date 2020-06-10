<template>
<div class="banner-ads">
    <img src="~assets/banners/dixie-banner.png" alt="">
</div>
</template>

<script>
export default {
    methods: {
        doModal() {
            this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'banner')
        }
    }

}
</script>

<style lang="scss" scoped>

.banner-ads {

    & img {
        width: 90%;
    }
}

</style>