import { createRouter, createWebHistory, RouterView } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/routes';
import Translation from '@/i18n/translation';

const routes = [
    {
        path: '/:locale?',
        component: RouterView,
        beforeEnter: Translation.routeMiddleware,
        children: [
            {
                path: '',
                name: ROUTE_NAMES.DEFAULT_LAYOUT.routeName,
                redirect: { name: ROUTE_NAMES.ABOUT_PAGE.routeName },
            },
            {
                path: 'about',
                name: ROUTE_NAMES.ABOUT_PAGE.routeName,
                component: () => import('@/views/AboutPage/index.vue'),
            },
            {
                path: 'resume',
                name: ROUTE_NAMES.RESUME_PAGE.routeName,
                component: () => import('@/views/ResumePage/index.vue'),
            },
            {
                path: 'project',
                name: ROUTE_NAMES.PROJECT_PAGE.routeName,
                component: () => import('@/views/ProjectPage/index.vue'),
            },
            {
                path: 'contact',
                name: ROUTE_NAMES.CONTACT_PAGE.routeName,
                component: () => import('@/views/ContactPage/index.vue'),
            },
        ],
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
