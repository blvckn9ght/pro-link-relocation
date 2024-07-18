
import { createRouter, createWebHistory } from 'vue-router'


const routes =[
    {path: '/', name: 'home', component: ()=> import('../views/MainWebsite.vue'),},
]


const router = createRouter({
    routes,
    history: createWebHistory(),
})


router.beforeEach(async (to, from, next) => {
  
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (await getCurrentUser()) {
        next();
      } else {
        
      }
    } else {
      next();
    }
  });


export default router
