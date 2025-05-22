import { createApp } from "vue";
import App from "./App.vue";
import router, { setupRouter } from './router';
import print from 'vue-print-nb'
import Qrcode from 'qrcode';
import { printPlugin } from 'vue-print-next';

const app = createApp(App);

app.use(print);
app.use(Qrcode);
app.use(printPlugin);
// 挂在路由
setupRouter(app);
// 路由准备就绪后挂载APP实例
await router.isReady();

app.mount('#app', true);