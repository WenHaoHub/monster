import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   redirect: '/system'
// },
// {
//   path: '/system',
//   component: () =>
//     import('../views/goodsSystem/system/System.vue'),
//   children: [{
//     path: '/',
//     redirect: '/main'
//   },
//   {
//     //内容区路由
//     path: '/main',
//     component: () =>
//       import('../views/goodsSystem/main/Main.vue'),
//     children: [
//       //内容区子路由
//       {
//         path: 'addGood',
//         component: () =>
//           import('../components/goods/addGoods.vue')
//       }
//     ]
//   },
  
//   ]
// },

// ]

// import { component } from 'vue/types/umd'




const routes = [
  {
    path: '/',
    redirect: '/system'
  },
  {
    path: '/system',
    component: () => import('../views/goodsSystem/system/System.vue'),
    children: [
      {
        path: '/',
        redirect: '/myShops'
      },
      {
        //内容区路由
        path: '/main',
        component: () => import('../views/goodsSystem/main/Main.vue'),
        children: [
          //内容区子路由
          {
            path: '/MyShops',
            name: 'MyShops',
            component: () => import('../components/shops//MyShops.vue')
          },
          {
            path: '/AddShops',
            component: () => import('../components/shops//AddShops.vue')
          },
          {
            path: '/UpdateShops',
            name: 'MyShops',
            component: () => import('../components/shops//UpdateShops.vue')
          },
          {
            path: '/shopManager',
            component: () => import('../components/admin/ShopManager.vue')
          },
          {
            path: '/messageCenter',
            component: () => import('../components/admin/MessageCenter.vue')
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
