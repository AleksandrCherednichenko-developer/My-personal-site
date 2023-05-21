import { createRouter, createWebHistory } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/routes';

const routes = [
    {
        path: '/',
        name: ROUTE_NAMES.HOME_PAGE.routeName,
        component: () => import('@/views/HomePage/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior (to, from) {
        return { top: 0 };
    },
});

router.onError(error => {
    if (error.message.includes('Failed to fetch dynamically imported module')) {
        window.location = '/';
    }
});

export default router;
