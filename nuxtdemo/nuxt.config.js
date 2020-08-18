const { resolve } = require('path')
const port = 7092

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  MFE: {
    path: 'example/mfe.js',
    force: true
  },
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Simple usage
    '@femessage/nuxt-micro-frontend',
  ],
  tailwindcss: {
    configPath: resolve(__dirname, './tailwind.config.js'),
    cssPath: '~/assets/css/tailwind.scss',
  },
  purgeCSS: {
    enabled: false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: `//localhost:${port}`,
    devMiddleware: {
      port,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    extend (config, ctx) {
    }
  }
}
