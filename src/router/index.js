import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'
// import Project from './views/Project.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: Home,
        },
        {
            path: '/project',
            component: () => import('./../views/Project.vue'),
        },
        {
            path: '/contact',
            component: () => import('./../views/Contact.vue'),
        }
    ]
});

export default router;