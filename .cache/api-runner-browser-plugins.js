module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-fontawesome-css/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/images/favicon/icon.png","name":"Martyn Robotham Website","short_name":"My Website","description":"My personal website","start_url":"/","background_color":"#8EE4AF","theme_color":"#EDF5E1","display":"standalone","icons":[{"src":"src/images/favicon/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"src/images/favicon/android-chrome-512x512.png","sizes":"512x512","type":"image/png"},{"src":"src/images/favicon/apple-touch-icon.png","sizes":"180x180","type":"image/png"},{"src":"src/images/favicon/favicon-16x16.png","sizes":"16x16","type":"image/png"},{"src":"src/images/favicon/favicon-32x32.png","sizes":"32x32","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"cfd458020190e138c3380f63a65c443e"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
