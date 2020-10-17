export default function ({ store, redirect }) {
    // If the user is not authenticated
    console.log("middle ", store.state.awsAuth)
    if (!store.state.awsAuth.isAuthenticated) {
      return redirect('/')
    }
  }
// export default function({store, route, redirect}){
//     console.log('In Middle')
     
//          console.log('user in middle', localStorage)
     
//     // if(!store.state.awsAuth.isAuthenticated){
//     //   return redirect('/')
//     // }
// }

// export default function (context) {
//     console.log('[running init auth]')
    
//     if(process.client) {
//         context.store.dispatch('awsAuth/initAuth')
//         return;
//     }
//     return;
    
// }
// export default function (context) {
    // If the user is not authenticated
    
        // if(process.client) {
            // console.log("Checking Auth")
            // if(context.store.state.awsAuth.isAuthenticated){
            //     console.log('returninig from Middle')
            //     return
            // } else {
                
                    // console.log("setting")
                    //  let user =  context.store.dispatch('awsAuth/load')
                    //  let user = context.store.state.auth.user.attributes['custom:shopName']
                    //  console.log(user)
                    //  context.redirect(`/auth/${user.attributes['custom:shopName']}`)
                    //  return
                
                // }
            

        
            // console.log("load from localstorage")
            // context.store.dispatch('awsAuth/middleWarelocalInit')
            // if(context.store.state.awsAuth.isAuthenticated) {
            //     let shopname
            // }
            // return
            //check if user is admin of this
        
        
            // }
// }

// export default function (context) {
//     console.log('[running auth admin]')
//     // console.log(context.store.getters['reservation/getActiveHome'])

//     if(context.store.getters['auth/getIsAdmin'] == false) {
//         console.log('redirecting')
        
//             context.redirect('/')

        
//     } 
//     return;
// }