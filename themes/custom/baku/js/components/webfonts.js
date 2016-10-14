var Webfont = require('webfontloader');

Webfont.load({
  custom: {
    families: [
      'Roboto:n4,n7,i4,i7',
      'Roboto Condensed:n4,n7,i4,i7',
      'Roboto Slab:n4,n7'
    ],
    urls: [
      '/sites/marlo.official/themes/custom/baku/dist/fonts/Roboto.css',
      '/sites/marlo.official/themes/custom/baku/dist/fonts/Roboto-Condensed.css',
      '/sites/marlo.official/themes/custom/baku/dist/fonts/Roboto-Slab.css'
    ]
  },
  active: function() {
    sessionStorage.fonts = true;
  },
  timeout: 2000
});
