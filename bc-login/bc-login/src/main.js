import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Login from './components/Login'
import Regist from './components/Regist'

Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

var router = new VueRouter()
router.map({
  '/': {
    component: Login
  },
  '/regist': {
    component: Regist
  }
})

router.start(App, '#app')
