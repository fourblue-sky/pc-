import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search'
    },
    {
        path:'/Login',
        component:Login,
    },
    {
        path:'/Register',
        component:Register
    }
]