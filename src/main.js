import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入elementui
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);

// 引入httpApis
import httpApis from './http/index'
Vue.prototype.$http = httpApis

//设置JSCode安全密钥
window._AMapSecurityConfig = {
  securityJsCode: "5fee379c9a5fdef0a02feb6302fadfe9",
};

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
