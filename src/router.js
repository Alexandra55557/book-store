import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/view/Home';
import Register from '@/view/Register';
import Catalog from '@/view/Catalog';
import Users from '@/view/Users';
import CreatePost from '@/view/CreatePost';
import Bag from '@/view/Bag';
import PostContent from '@/view/PostContent';

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
    },
    {
        name: 'users',
        path: '/users',
        component: Users,
    },
    {
        name: 'createPost',
        path: '/createPost',
        component: CreatePost,
    },
    {
        name: 'bag',
        path: '/bag',
        component: Bag,
    },
    {
        name: 'id',
        path: '/postContent/:id',
        component: PostContent,
    },
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