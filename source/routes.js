import home from 'pages/home.vue'
import onboarding from 'pages/onboarding.vue'
import editor from 'pages/editor.vue'
import info from 'pages/info.vue'

export default [
    {path: '/', name: 'home', component: home},
    {path: '/onboarding', component: onboarding},
    {path: '/editor', component: editor},
    {path: '/info', component: info}
]
