export const state = () => ({
    modalActive: false,
    modalType: '',
    eventModal: {}
});

export const getters = {   
   getModalActive(state) {
       return state.modalActive
   },
   getModalType(state){
    return state.modalType
   },
   getEventModal(state) {
       return state.eventModal
   }
};

export const mutations = {
    setModalActive(state) {
        state.modalActive = !state.modalActive
    },
    setEventModal(state, payload) {
        state.eventModal = payload
    },
    setModalType(state,payload){
        state.modalType = payload
    }
};

export const actions = {
    
};