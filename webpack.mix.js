let mix = require('laravel-mix');
require('vuetifyjs-mix-extension')

// mix.js('resources/js/app.js', 'public/js').vuetify()
mix.setPublicPath('./')
    .sass('assets/sass/popup.scss', 'dist/css')
    .js('assets/js/background.js', 'dist/js')
    .js('assets/js/popup.js', 'dist/js').vue()
    .js('assets/js/options.js', 'dist/js').vuetify()
    .copy('assets/images/', 'dist/images')
    .options({
        processCssUrls: false
    });