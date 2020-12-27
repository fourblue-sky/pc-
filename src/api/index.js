import ajax from './ajax'
import mockAjax from './mockAjax'
export function reqCategoryList () {
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}
export const reqBannerList = ()=> {
    return ajax('/cms/banner')
}
export const reqFloors = ()=>{
    return mockAjax('/floors')
}
export const reqRecommends = ()=>{
    return mockAjax('/recommends')
}
export const reqRank = ()=>{
    return mockAjax('/rank')
}
export const reqLikes = () =>{
    return mockAjax('/like')
}
export const reqProductList = (searchParams)=>{
    return ajax.post('/list',searchParams)
    
}