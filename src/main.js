import '@/assets/css/main.scss';

import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import mitt from 'mitt';
import i18n from '@/i18n';

const app = createApp(App);
export const emitter = mitt();

app
    .use(i18n)
    .use(router)
    .provide('emitter', emitter)
;

app.mount('#app');
