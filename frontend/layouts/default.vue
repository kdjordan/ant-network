<template>
  <div>
    <TopNav />
    <nuxt />
    <Sponsers />
    <Footer />
    <BotBar />
    <transition name="fade">
      <Modals />
    </transition>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import BotBar from '@/components/BottomBar'
import Modals from '@/components/Modals'
import Sponsers from '@/components/Sponsers'


export default {
  components: {
    TopNav,
    BotBar,
    Footer,
    Sponsers,
    Modals
  }

}
</script>
<style lang="scss">
@import '../assets/scss/animations.scss';

*, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
   background-image: url('~assets/images/top-bg.jpg');
    background-position: top;
    background-repeat: repeat;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    min-height: 100vh;
    font-family: 'Roboto';
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

p {
  line-height: 2.6rem;
}

.map {
  height: 75rem;
  padding-bottom: 8rem;
}
</style>
