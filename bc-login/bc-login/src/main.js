import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Login from './components/Login'
import Regist from './components/Regist'
import Admin from './components/Admin'

Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Login
  },
  '/regist': {
    component: Regist
  },
  '/admin': {
    component: Admin
  }
})

router.start(App, '#app')
