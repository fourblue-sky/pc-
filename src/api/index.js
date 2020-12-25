import ajax from './ajax'
export function reqCategoryList () {
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}
export const reqBannerList = ()=> {
    return ajax('/cms/banner')
}