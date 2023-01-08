import Vue from 'vue';
import vuetify from './plugins/vuetify'

import Options from './components/Options.vue';
// new Vue({
//     vuetify,
//     render: h => h(App)
// }).$mount('#app')

const app = new Vue({
    vuetify,
    el: '#app',
    render: createElement => createElement(Options)
});