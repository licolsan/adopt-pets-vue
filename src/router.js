import Vue from 'vue'
import Router from 'vue-router'
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'
import Home from './views/Home.vue'
import Pet from './views/Pet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '', component: Home },
    { path: '/cats', component: Cats },
    { path: '/dogs', component: Dogs },
    { path: '/pets/:species/:id', component: Pet }
  ]
})
