import {reqBannerList, reqCategoryList,reqFloors,reqRank,reqRecommends,reqLikes} from '@/api'
const state = {
    categoryList:[],
    bannerList:[],
    floors:[],
    recommends:[],
    rank:[],
    likes:[]

}
const mutations = {
    RECIVE_CATEGORYLIST(state,result){
        state.categoryList = result.splice(0,15)
    },
    RECIVE_BANNER_LIST(state,result){
        state.bannerList = result
    }
    ,
    RECIVE_FLOORS(state,result){
        state.floors = result
    },
    RECIVE_RECOMMENDS(state,result){
        state.recommends = result
    },
    RECIVE_RANK(state,result){
        state.rank = result
    },
    RECIVE_LIKES(state,result){
        state.likes = result
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
    async getFloors({commit}){
        const result = await reqFloors()
        if (result.code === 200){
            commit('RECIVE_FLOORS',result.data)
        }
    },
    async getRecommends({commit}){
        const result = await reqRecommends()
        if (result.code === 200){
            commit('RECIVE_RECOMMENDS',result.data)
        }
    },
    async getRank({commit}){
        const result = await reqRank()
        if(result.code === 200){
            commit('RECIVE_RANK',result.data)
        }
    },
    async getLikes ({commit}){
        const result = await reqLikes()
        if(result.code === 200){
            commit('RECIVE_LIKES',result.data)
        }
    }
   
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