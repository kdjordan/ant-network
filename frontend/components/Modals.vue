<template>
  <div v-if="getModalActive" class="modal" @click.stop="closeModalish($event)">

      <div v-if="getModalType == 'banner'">
          <div class="modal__container">
            <BannerModal />
            <div class="modal__close" @click="closeModal">close</div>
          </div>
      </div>

      <div v-if="getModalType == 'map'">
          <div class="modal__container">
            <MapModal />
            <div class="modal__close" @click="closeModal">close</div>
          </div>
      </div>

      <div v-if="getModalType == 'event'">
          <div class="modal__container">
            <EventsModal />
            <div class="modal__close" @click="closeModal">close</div>
          </div>
      </div>

      <div v-if="getModalType == 'singleEvent'">
          <div class="modal__container">
            <SingleEventModal />
            <div class="modal__close" @click="closeModal">close</div>
          </div>
      </div>

      <div v-if="getModalType == 'sponser'">
          <div class="modal__container">
            <SponserModal />
            <div class="modal__close" @click="closeModal">close</div>
          </div>
      </div>

      <div v-if="getModalType == 'contact'">
          <div class="modal__container">
            <ContactModal />
            <div class="modal__close" @click="closeModal">close</div>
          </div>
      </div>

      <div v-if="getModalType == 'login'">
          <div class="modal__container">
            <LoginModal />
            <div class="modal__close" @click="closeModal">close</div>
          </div>
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SingleEventModal from '@/components/modals/_singleEventModal'
import EventModal from '@/components/modals/_eventsModal'
import BannerModal from '@/components/modals/_bannerModal'
import MapModal from '@/components/modals/_mapModal'
import EventsModal from '@/components/modals/_eventsModal'
import SponserModal from '@/components/modals/_sponserModal'
import ContactModal from '@/components/modals/_contactModal'
import LoginModal from '@/components/modals/_loginModal'

export default {
    components: {
        SingleEventModal,
        BannerModal,
        MapModal,
        EventsModal,
        SponserModal,
        ContactModal,
        LoginModal
    },
    computed: {
        ...mapGetters({
            getModalActive: 'modal/getModalActive',
            getModalType: 'modal/getModalType',
        })
    },
    methods: {
        closeModalish(el) {
            if(el.target.className == "modal") {
                this.$store.commit('modal/setModalActive')
            }
        },
         closeModal() {
            this.$store.commit('modal/setModalActive')
        },
    }
}
</script>

<style lang="scss" scoped>

.modal {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(205, 205, 205, 0.8);
    backdrop-filter: blur(3px);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

     &__container {
        background: white;
        border-radius: 1rem;
        box-shadow: 5px 5px 25px 4px #8B9B90;
        height: auto;
        width: 50rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 2rem;
    }

     &__close {
        width: 8rem;
        text-align: center;
        margin: 0 auto;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 1.2rem;
        color: white;
        background: $color1;
        border: 2px solid $color1;
        border-radius: 2rem;
        padding: .3rem .9rem;
        margin-bottom: 1rem;
        transition: all .4s;

        &:hover {
            background: transparent;
            color: $color1;
            border: 2px sold $color2;
        }
    }
    
}

</style>