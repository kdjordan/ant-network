
export default function (context) {
    if(process.client) {
        if (!context.store.getters['auth/isAuthenticated']) {
          return context.redirect('/')
        }
    }
}