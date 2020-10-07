import data from '../static/data/event-data.js'

export const state = () => ({
    doSlideRight: false,
    doSlideLeft: false,
    events: [],
    eventPage: 0,
    featuredEvents: [],
    carouselIndex: 0,
    carouselIndices: {
        first: 0,
        second: 1,
        third: 2,
        fourth: 3,
    },
});


export const getters = {   
    getDoSlide(state) {
        return state.doSlideRight 
    },
    getSlideRight(state) {
        return state.doSlideRight 
    },
    getSlideLeft(state) {
        return state.doSlideLeft
    },
    getEvents(state) {
        return state.events
    },
    getFeaturedEvents(state) {
        return state.featuredEvents
    },
    getFeaturedEvent(state) {
        return state.featuredEvents[state.eventPage];
    },
    getEventPage(state) {
        return state.eventPage
    },
    getCarouselImages(state) {
        return state.featuredEvents
    },
    getCarouselIndex(state) {
        return state.carouselIndex
    },
    getCarouselIndicies(state) {
        return state.carouselIndices
    }
};

export const mutations = {
    toggleSlide(state, payload) {
        if(payload == 'right') {
            state.doSlideRight = false
        } else {
            state.doSlideLeft = false
        }
    },
    addEvents(state, payload) {
        state.events.push(payload)
    },
    addFeaturedEvent(state, payload) {
        state.featuredEvents.push(payload)
    },
    pageRight(state) {
        if(state.eventPage == state.featuredEvents.length - 1) {
            state.eventPage = 0
        } else {
            state.eventPage++
        }
    },
    pageLeft(state) {
        if(state.eventPage ==  0) {
            state.eventPage = state.featuredEvents.length - 1
        } else {
            state.eventPage--
        }
    },
    carouselLeft(state) {
        state.doSlideLeft = true
        for (const index in state.carouselIndices) {
            if(state.carouselIndices[index] == 0) {
                state.carouselIndices[index] = state.featuredEvents.length - 1
            } else {
                state.carouselIndices[index]--
            }
          }   
          this.dispatch('events/undoSlide', 'left')
    },
    carouselRight(state) {
        state.doSlideRight = true
        for (const index in state.carouselIndices) {
            if(state.carouselIndices[index] == state.featuredEvents.length - 1) {
                state.carouselIndices[index] = 0
            } else {
                state.carouselIndices[index]++
            }
        }
        this.dispatch('events/undoSlide', 'right')
        
    }
};

export const actions = {
    async undoSlide({commit}, direction) {
        if (direction == 'right') {
            setTimeout(() => {
                commit('toggleSlide', 'right')
            })
        } else {
            setTimeout(() => {
                commit('toggleSlide', 'left')
            })
        }
    },
    async loadData ({ commit, state }) {
            try {    
                data.sort().forEach((event)=> {
                    commit('addEvents', event)
                })
                return true;
            } catch(e) {
                console.log(e)
                return e
            }
    },
    loadFeaturedEvents({ commit, state }) {
            const featuredArr = state.events.filter((event) => event.featured == true)
            featuredArr.forEach((event) => {
                commit('addFeaturedEvent', event)
            })
            return true;
    }
};