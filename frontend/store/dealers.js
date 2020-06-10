import dealers from '../static/data/dealer-data.js'
import cities from '../static/data/cities.js'

export const state = () => ({
    index: 0,
    dealers: [],
    cities: []
});

export const getters = {
    getDealers(state) {
        return state.dealers
    },
    getDealer(state) {
        return state.dealers[state.index]
    },
    getCities(state) {
        return state.cities
    }
};

export const mutations = {
    addDealers(state, payload) {
        state.dealers.push(payload)
    },
    addCity(state, payload) {
        state.cities.push(payload)
    }
};

export const actions = {
    async loadDealers({ commit }) {
        try {
            dealers.forEach(item => {
                commit('addDealers', item)
            })
            cities.forEach((city) => {
                commit('addCity', city)
            })
            return true
        } catch(e) {
            console.log(e)
        }

    }

};