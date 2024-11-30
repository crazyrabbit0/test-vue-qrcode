import { createRouter, createWebHistory } from 'vue-router'
import vueConfig from '@/../vue.config'

const routes = [
    {
        path: '/',
        name: 'test-vue-qrcode',
        component: () => import('@/pages/TestVueQrcode.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(vueConfig.publicPath),
    routes,
})

export default router
