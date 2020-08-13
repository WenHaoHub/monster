import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [{ //买家  用户
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/register/register.vue')
    },
    { //商家
        path: '/loginMg',
        name: 'loginMg',
        component: () =>
            import ('../views/login/loginMg.vue')
    },
    {
        path: '/registerMg',
        name: 'registerMg',
        component: () =>
            import ('../views/register/registerMg.vue')
    },
    { //系统管理员
        path: '/loginadmin',
        name: 'loginadmin',
        component: () =>
            import ('../views/login/loginAdmin.vue')
    },
    {
        path: '/',
        redirect: '/system'
    },
    {
        path: '/system',
        component: () =>
            import ('../views/goodsSystem/system/System.vue'),
        children: [{
                path: '/',
                redirect: '/myShops'
            },
            {
                //内容区路由
                path: '/main',
                component: () =>
                    import ('../views/goodsSystem/main/Main.vue'),
                children: [
                    //内容区子路由
                    {
                        path: '/MyShops',
                        name: 'MyShops',
                        component: () =>
                            import ('../components/shops//MyShops.vue')
                    },
                    {
                        path: '/AddShops',
                        component: () =>
                            import ('../components/shops//AddShops.vue')
                    },
                    {
                        path: '/UpdateShops',
                        name: 'MyShops',
                        component: () =>
                            import ('../components/shops//UpdateShops.vue')
                    },
                    {
                        path: '/shopManager',
                        component: () =>
                            import ('../components/admin/ShopManager.vue')
                    },
                    {
                        path: '/messageCenter',
                        component: () =>
                            import ('../components/admin/MessageCenter.vue')
                    },
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
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router