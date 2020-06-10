<template>
<div>
    <div class="nav">  
        <div class="nav__top">
            <NuxtLink to="/"><img src="~/assets/svg/logo.svg" class="logo" alt="iowa antique network logo"></NuxtLink>
            <BannerAds />    
           </div>
    </div>
    <div class="nav__bottom">
        <nav>
            <NuxtLink to="/dealers" class="link">Find Dealers</NuxtLink>
            <NuxtLink to="/events" class="link">Upcoming Events</NuxtLink>
            <NuxtLink to="/daily-news" class="link">Daily News</NuxtLink>
            <NuxtLink to="#" class="link">Vendors Needed</NuxtLink>
            <NuxtLink to="/advertise" class="link">Advertise</NuxtLink>
            <NuxtLink @click.native="doModal" to="#" class="link" >Contact</NuxtLink>
            <NuxtLink to="#" class="link" @click.prevent="doModal">Login</NuxtLink>
        </nav>

    </div>

</div>
</template>

<script>
import BannerAds from '@/components/BannerAds'
export default {
    components: {
        BannerAds
    },
    methods: {
        doModal() {
             this.$store.commit('modal/setModalActive')
            this.$store.commit('modal/setModalType', 'contact')
        }
    }

}
</script>
<style lang="scss">

.nav {
    width: 100%;

    &__top {
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 120rem;
        margin: 0 auto;
    }

    &__top .logo{
        width: 80%;
        transition: all .4s ease;

        &:hover {
           transform: translateY(-.3rem);
       }
    }

    &__bottom {
        width: 100%;
        background: $color1;
        border-bottom: 2px solid white;


        & nav {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 120rem;
            margin: 0 auto;
            

            & .link {
                text-align: center;
                font-family: $font4;
                font-size: 2rem;
                text-transform: uppercase;
                color: white;
                cursor: pointer;
                padding: 1.5rem 1.5rem;
                align-self: stretch;
                background: $color1;
                transition: all .4s ease;
            }
            & .link:hover {
                background: $color2;
            } 
            
            & .link:hover {
                color: black;
            }
        }
    }

}


</style>