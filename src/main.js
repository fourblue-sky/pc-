import Vue from 'vue';
import App from '@/App';
import router from '@/router'
import TypeNav from '@/components/TypeNav';
import store from '@/store';
import '@/mock/mockServer'
import './plugins/swiper'



Vue.config.productionTip = false;
Vue.component(TypeNav.name,TypeNav);
new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  
  el:'#app',
  router,
  store,
  render:h=>h(App)
})