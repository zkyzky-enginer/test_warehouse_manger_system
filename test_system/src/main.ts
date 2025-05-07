import { createApp } from "vue";
import App from "./App.vue";
import router, { setupRouter } from './router';

const app = createApp(App);
// 挂在路由
setupRouter(app);
// 路由准备就绪后挂载APP实例
await router.isReady();

app.mount('#app', true);