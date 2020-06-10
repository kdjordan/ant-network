
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cabin+Sketch&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Special+Elite&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js', {src: '~/plugins/amplify.js', mode: 'client'}, '~/plugins/auth'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ["@nuxtjs/axios","@nuxtjs/style-resources","@nuxtjs/proxy"],
    styleResources: {
      scss: [
        "~assets/scss/variables.scss",
        "~assets/scss/utilities.scss",
        "~assets/scss/forms.scss",
        "~assets/scss/page.scss",
        "~assets/scss/animations.scss",
        "~assets/scss/modals.scss",
        "~assets/scss/buttons.scss"
      ]
    },
    proxy: {
      '/map/api': {
        target: 'https://maps.googleapis.com/maps/api/js?key=' + process.env.MAP_KEY
        }
    },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }

  },
  'env': {
    'GOOGLE_MAPS_KEY': process.env.MAP_KEY,
  },
}
