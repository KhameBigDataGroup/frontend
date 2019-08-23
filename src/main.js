import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


