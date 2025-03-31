import { createRouter, createWebHistory } from 'vue-router';
import AiSoftwarePage from '@/views/AISoftwarePage.vue';
import CompanyPage from '@/views/CompanyPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import HomePage from '@/views/HomePage.vue';
import IndustryPage from '@/views/IndustryPage.vue';
import ServicesPage from '@/views/ServicesPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/software',
        name: 'AISoftware',
        component: AiSoftwarePage
    },
    {
        path: '/company',
        name: 'Company',
        component: CompanyPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/industry',
        name: 'Industry',
        component: IndustryPage
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesPage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 如果有保存的位置（比如用户点击了浏览器的后退按钮），则使用保存的位置
        if (savedPosition) {
            return savedPosition;
        }
        // 对于所有其他情况，滚动到顶部
        return { top: 0 };
    }
});

export default router;
