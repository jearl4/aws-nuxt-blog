export default {
  target: "static",
  head: {
    title: "Document Object",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Document Object blog on technology, coding, and life as a software engineer"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/css/resetr.css", "@/assets/css/common.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/prismicLinks", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/google-analytics",
    "@nuxtjs/sitemap",
    '@nuxtjs/vuetify'
  ],

  /*
   ** Sitemap config
   */
  sitemap: {
    hostname: "https://www.documentobject.com",
    gzip: false,
    trailingSlash: true,
    exclude: [],
    routes: [
      {
        url: '/aws',
        priority: 1
      },
      {
        url: '/typescript',
        priority: 1
      },
      {
        url: '/java',
        priority: 1
      },
      {
        url: '/blog/sql-injection-nodejs',
        priority: .4
      },
      {
        url: '/blog/aws-certified-having-a-life',
        priority: .4
      }
    ]
  },

  prismic: {
    endpoint: "https://aws-nuxt-blog.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  },

  generate: {
    fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    checkDuplicatedScript: true,
    dev: false
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }
};
