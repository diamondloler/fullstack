import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        num: 0,
        list: [1, 2, 3]
    },
    mutations: {
        add(state) {
            state.num++
        }
    },
    getters: {
        getNum(state) {
            return state.list.filter(item => item > 1)
        }
    },
    actions: {
        changeNum({commit, state}, nice) {
            console.log(nice)
            state.num += 10086
            commit('add')
        }
    },
    modules: {

    }
})

export default store
