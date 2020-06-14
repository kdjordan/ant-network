import { Auth } from 'aws-amplify'


export const state = () => ({
    isAuthenticated: false,
    user: null
})

export const mutations = {
    set(state, user) {
        state.isAuthenticated = !!user
        state.user = user
    }
}

export const getters = {
    getUser(state) {
        return state.user
    },
    isAuthenticated(state) {
        return state.isAuthenticated
    }
}

export const actions = {
    async load({ commit }){
        try {
            const user = await Auth.currentAuthenticatedUser()
            commit('set', user)
            return user
        } catch (e) {
            commit('set', null)

        } 
    },

    async register(__, { email, password, shopname } ) {
        const user = await Auth.signUp({
            username: email,
            password,
            attributes: {
                'custom:shopName': shopname
            }
        })
        return user
    },

    async confirmRegistration(_, { email, code}) {
        return await Auth.confirmSignUp(email, code)
    },

    async login({ commit }, { email, password}) {
        const user = await Auth.signIn(email, password)
        commit('set', user)
        return user
    },

    async resendCode(_,  email) {
        try {
            await Auth.resendSignUp(email)
        } catch (e) {
            console.log("Error resending code", e)
        }

    },

    async logout({ commit }) {
        await Auth.signOut()
        commit('set', null)
    }
}