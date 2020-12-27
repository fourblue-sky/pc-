// 针对模拟数据的请求封装
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const service = axios.create({
    baseURL:'/mock',
    method:'get'

})
service.interceptors.request.use((config)=>{
    NProgress.start()
    return config
})
service.interceptors.response.use(
    (response)=>{
    NProgress.done()
    return response.data
    },
    (error)=>{
        NProgress.done()
        return Promise.reject(error)
    }
)
export default service