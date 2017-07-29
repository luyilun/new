import Vue from 'vue'
import App from './App.vue'
import './elementUI/element.js'
import Router from 'vue-router'
import '../node_modules/_animate.css@3.5.2@animate.css/animate.min.css'


import News from './components/new.vue'
import Home from './components/home.vue'
import Vadio from './components/vadio.vue'
import Login from './components/login.vue'

import Xt from './components/toutiao.vue'
import Gd from './components/guojia.vue'
import Sx from './components/shehui.vue'

Vue.use(Router)

const router=new Router({
	routes:[
		{
			path:'/homes',
			component:Home
		},{
			path:'/news',
			component:News,
			children:[{
				path:'xt',
				component:Xt
			},{
				path:'gd',
				component:Gd
			},{
				path:'sx',
				component:Sx
			},{
				path:'/',
				redirect:'xt'
			}
			]

		},{
			path:'/vadio',
			component:Vadio
		},{
			path:'/login',
			component:Login
		},{
			path:'/',
			redirect:'/homes'
		}
	]
})

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
