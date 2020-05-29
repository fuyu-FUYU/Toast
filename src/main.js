import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局引入Toast
Vue.use(Toast);
import './components/Toast/index.css';
import Toast from './components/Toast/index';


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount("#app")