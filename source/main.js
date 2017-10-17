if (process.env.NODE_ENV !== 'production') require('file-loader!index.html')

import Vue from 'vue'
import VueRouter from 'vue-router'

import main from 'main.vue'
import routes from 'routes.js'


Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({mode: 'history', routes})

new Vue({el: 'body', router, render: create => create(main)})
