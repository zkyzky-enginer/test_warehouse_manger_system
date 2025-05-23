import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'test',
    // 注意这里要带上文件后缀.vue
    component: () => import('@/views/index.vue'), 
    meta: {
      title: 'xx',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  // 期望滚动到哪个的位置
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
})

export function setupRouter(app: App) {
  app.use(router);
}

export default router