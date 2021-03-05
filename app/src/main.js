import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import Services from './utils/services';

Vue.config.productionTip = false;

Vue.use(Services);

new Vue({
  router,
  vuetify,
  Services,
  render: h => h(App)
}).$mount('#app')
