import Vue from 'vue'
import App from './App'
import router from './router'

// Element UI
import ElementUI from 'element-ui'
import './assets/scss/element-theme.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
