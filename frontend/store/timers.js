export const state = () => ({
    events: {
        running: false,
        interval: null
    },
    alerts: {
        running: false,
        interval: null
    },
    carousel: {
        running: false,
        interval: null
    }
});

export const getters = {
};

export const mutations = {
    setInterval(state, payload) {
        if(payload.type == 'events') {
            state.events.running = true
            state.events.interval = payload.interval
        }
        if(payload.type == 'alerts') {
            state.alerts.running = true
            state.alerts.interval = payload.interval
        }
        if(payload.type == 'carousel') {
            state.carousel.running = true
            state.carousel.interval = payload.interval
        }
    },
    resetInterval(state, payload) {
        if(payload == 'events') {
            clearInterval(state.events.interval)
            this.dispatch('timers/startCycleEvents')
        }
        if(payload == 'alerts') {
            clearInterval(state.events.alerts)
            this.dispatch('timers/startCycleAlerts')
        }
        if(payload == 'carousel') {
            clearInterval(state.carousel.interval)
            this.dispatch('timers/startCycleCarousel')
        }

    },
    setRunning(state, payload) {
        if(payload == 'events') {
            state.events.running = true
        }
        if(payload == 'alerts') {
            state.alerts.running = true
        }
        if(payload == 'carousel') {
            state.carousel.running = true
        }
    }
};

export const actions = {
    startCycleEvents({ commit }) {
        let theInterval = setInterval(() => {
            this.commit('events/pageRight')
            }, 5000)
        commit('setInterval', {type: 'events', interval: theInterval})
    },
    startCycleAlerts({ commit }) {
        let theInterval = setInterval(() => {
            this.commit('alerts/getNextAlert')
            }, 5000)
            commit('setInterval', {type: 'alerts', interval: theInterval})
    },
    startCycleCarousel({ commit }) {
        let theInterval = setInterval(() => {
            this.commit('events/carouselRight')
            }, 5000)
            commit('setInterval', {type: 'carousel', interval: theInterval})
    },
};