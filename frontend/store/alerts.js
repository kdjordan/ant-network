import alertFeed from '../static/data/alert-data.js'

export const state = () => ({
    index: 0,
    alerts: []
});

export const getters = {
    getAlerts(state) {
        return state.alerts[state.index]
    }
};

export const mutations = {
    getNextAlert(state) {
        if(state.index == state.alerts.length-1) {
            state.index = 0
        } else {
            state.index++
        }
    },
    addAlerts(state, payload) {
        state.alerts.push(payload)
    }
};

export const actions = {
    async loadAlerts({ commit }) {
        try {
            alertFeed.forEach(item => {
                commit('addAlerts', item)
            })
            return true
        } catch(e) {
            console.log(e)
        }

    }

};