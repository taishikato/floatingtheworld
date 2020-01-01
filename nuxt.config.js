const title = 'Floating The World - Trackmaker based in Vancouver'
const url = 'https://floatingtheworld.com'
const description = 'Hi, I am Floating The World, a trackmaker based in Vancouver.'

export default {
  mode: 'universal',
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title,
    htmlAttrs: {
      class: 'bg-blue-300',
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'hiphop,trackmaker,music,trap,beat,beats,ableton live'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: title
      },
      { hid: 'og:url', property: 'og:url', content: url },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${url}/ogimage.png`
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
