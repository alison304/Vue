import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


let url = 'https://6334b866ea0de5318a0800ad.mockapi.io/users'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: []
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload
        }
    },
    actions: {
        async get({
            commit
        }) {
            await axios.get(url).then((response) => {
                commit('setUsers',response.data)
            })
        },
        async create({
            commit
        }, data) {
            await axios.post(url,data).then((response) => {
                console.log('response.data',response.data);
            })
        },        
    },
    modules: {}
})