// export default function ({ store, redirect }) {
//     // If the user is not authenticated
//     console.log("middle ", store.state.auth)
//     if (!store.state.authenticated) {
//       return redirect('/')
//     }
//   }
export default function (context) {
    // If the user is not authenticated
    console.log('In Middle')
        // if(process.client) {
            console.log("Checking Auth")
            // if(context.store.state.awsAuth.isAuthenticated){
            //     console.log('returninig from Middle')
            //     return
            // } else {
                console.log("setting")
                //  context.store.dispatch('awsAuth/load')
                //  let user = context.store.state.auth.user.attributes['custom:shopName']
                //  console.log(user)
                //  context.redirect(`/auth/${user.attributes['custom:shopName']}`)
                // }
            

        
            // console.log("load from localstorage")
            // context.store.dispatch('awsAuth/middleWarelocalInit')
            // if(context.store.state.awsAuth.isAuthenticated) {
            //     let shopname
            // }
            // return
            //check if user is admin of this
        return
        
            // }
}