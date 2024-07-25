import { createRouter, createWebHistory } from 'vue-router'

import CoachesList from './pages/Coaches/CoachesList.vue';
import CoachDetail from './pages/Coaches/CoachesDetails.vue';
import RegisterCoaches from './pages/Coaches/RegisterCoaches.vue';
import RequestReceived from './pages/requests/RequestsReceives.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
              { path: 'contact', component: ContactCoach } // /coaches/c1/contact
            ]
          },
        { path: '/register', component: RegisterCoaches },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: null }
    ]
});

export default router;