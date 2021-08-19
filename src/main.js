import Vue from 'vue'
import App from './App.vue'

import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faViruses, faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faViruses)
library.add(faBed)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
