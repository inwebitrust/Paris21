// eslint hotreload
const webpack = require('webpack')
module.exports = {
  /*
  ** Build configuration
  */
  modules: [
  'nuxt-babel',
  ],
  babel: {
    presets: [
      [ '@nuxtjs/babel-preset-app', {
          targets: { ie: 11 }
        }
      ]
    ]
  },
  //loading: '~/components/loading.vue',
  loading: false,
  loadingIndicator: false,
  css: [
    '@/assets/scss/main.scss'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' }
    ]
  },
  plugins: [{src: '~/plugins/velocity', ssr: false}, '~/plugins/mixinCommonMethods.js'],
  build: {
      /*
      ** You can extend webpack config here
      */
       /*plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery',
          '_': 'lodash'
          // ...etc.
        })
      ],
      */
      vendor: ['velocity-animate', 'axios','d3'],
      extend(config, ctx) {
        config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
          // Run ESLint on save
          if (ctx.isDev && ctx.isClient) {
              config.module.rules.push({
                  enforce: "pre",
                  test: /\.(js|vue)$/,
                  loader: "eslint-loader",
                  exclude: /(node_modules)/,
                  options: {
                      formatter: require('eslint-friendly-formatter'),
                      emitWarning: true
                  }
              })
          }

          if (ctx.isClient) {
            config.entry.vendor.push('babel-polyfill')
          }
      }
  },
  generate: {
    routes: [
      '/',
      '/presentation/',
      '/presentation/bassin',
      '/presentation/territoire',
      '/presentation/surveillance',
      '/qualite',
      '/qualite/macropolluants',
      '/qualite/phytosanitaires',
      '/qualite/biologie',
      '/qualite/preservation'
    ]
  },
  env: {
    title: process.env.APP_TITLE || 'NUxtjs template'
  },
  mode: 'spa',
  /* router: {
    middleware: 'boot'
  } */
  /*,
  router: {
    base : '/compass_nuxt/dist/'
  }*/
  /* ,
  router : {
    base : '/dev/itcompass/demo/'
  } */
}
