export const actions = {
    async nuxtServerInit({ dispatch }) {
        try {
            // let ans = dispatch('alerts/loadAlerts')
            let ans1 = dispatch('events/loadData')
            let ans2 = dispatch('events/loadFeaturedEvents')
            let ans3 = dispatch('dealers/loadDealers')
        } catch(e) {
            console.log(e);
        }
   }
}
