import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/view/Home';
import Register from '@/view/Register';
import Catalog from '@/view/Catalog';

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
    },
    {
        name: 'catalog',
        path: '/catalog',
        component: Catalog,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) =>{
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next
    }
    return middleware[0]({
        ...context
    })
})

export default router