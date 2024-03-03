import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/array',
    children: [{
      path: 'sparse',
      component: () => import('@/views/array/sparseArray.vue'),
    }]
  }, {
    path: '/queue',
    children: [{
      path: 'array',
      component: () => import('@/views/queue/arrayQueue.vue'),
    }]
  }]
})

export default router;