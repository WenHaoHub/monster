/*
 * @Author: your name
 * @Date: 2020-08-11 15:13:21
 * @LastEditTime: 2020-08-11 17:54:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\vue-project\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/system'
    },
    {
        path: '/system',
        component: () =>
            import ('../views/goodsSystem/system/System.vue'),
        children: [{
                path: '/',
                redirect: '/main'
            },
            {
                //内容区路由
                path: '/main',
                component: () =>
                    import ('../views/goodsSystem/main/Main.vue'),
                children: [
                    //内容区子路由
                    {
                        path: 'addGood',
                        component: () =>
                            import ('../components/goods/addGoods.vue')
                    },
                    {
                        path: 'goodOrderList',
                        component: () =>
                            import ('../components/orders/goodOrderList.vue')
                    }
                ]
            },
            {
                path: '/MyShops',
                name: 'MyShops',
                component: () =>
                    import ('../views/MyShops.vue')
            }
        ]
    },


    // import { component } from 'vue/types/umd'



]


const router = new VueRouter({
    routes
})

export default router