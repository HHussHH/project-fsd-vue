import {createApp} from "vue";
import "@/app/style/index.scss";
import App from "@/app/App.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import {routes} from "@/app/providers";
import {createI18n} from 'vue-i18n';

import messages from "@intlify/vite-plugin-vue-i18n/messages"

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: "en",
    legacy: false,
    globalInjection: true,
    messages
})
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(i18n)
app.mount("#app");
