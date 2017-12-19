import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.filter("times", function (time) {//value为13位的时间戳
  function timeChange(time) {//默认获取的时间是时间戳改成我们常见的时间格式
    //分钟
    var minute = time / 60;
    var minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //秒
    var second = time % 60;
   var seconds = parseInt(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var allTime = "" + minutes + "" + ":" + "" + seconds + ""
     return allTime;
   }
});
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
