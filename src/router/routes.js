import Search from '@/pages/Search'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
export default [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/search',
        component:Search,
        name:'search',
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true,
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true,
        }
    }
]