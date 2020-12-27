// vuex核心对象
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import users from './modules/users'
import search from './modules/search'
Vue.use(Vuex)
const state = {

}
const mutations = {

}
const actions = {
    
}
const getters = {

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        home,
        users,
        search
    }
})
