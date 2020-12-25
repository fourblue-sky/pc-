import {reqBannerList, reqCategoryList} from '@/api'
const state = {
    categoryList:[],
    bannerList:[],

}
const mutations = {
    RECIVE_CATEGORYLIST(state,result){
        state.categoryList = result.splice(0,15)
    },
    RECIVE_BANNER_LIST(state,result){
        state.bannerList = result
    }
}
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        if (result.code === 200){
            commit('RECIVE_CATEGORYLIST',result.data)
        }
    },
    async getBannerList({commit}){
        const result = await reqBannerList()
        if (result.code === 200){
            commit('RECIVE_BANNER_LIST',result.data)
        }
    },
   
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters:{

    }
}