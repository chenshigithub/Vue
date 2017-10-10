import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstPage from '../components/firstPage'
import secondPage from '../pages/secondPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path:'/first',
    	name:'hello1',
    	component:firstPage
    },{
    	path:'/second',
    	name:'second',
    	component:secondPage
    }
  ]
})
