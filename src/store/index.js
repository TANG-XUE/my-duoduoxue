import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import navData from '@/static/js/navData.js' //类别icon静态js

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectTagList: [
            { "name": "类别" },
            { "name": "距离" },
            { "name": "综合排序" },
            { "name": "全部筛选" }
        ],
        firstList: '', //一级类别
        secondList: [], //二级类别
        selectList: [], //筛选tag的列表
        schollList: [], //获取机构列表
    },
    mutations: {
        //获取一级类别
        saveTypeList(state, value) {
            state.firstList = value;
            // console.log(state.schollList)
        },
        //获取二级类别
        saveNtypeList(state, value) {
            state.secondList = value;
        },
        //获取筛选tag的列表数据
        saveSelectList(state, value) {
            state.selectList = value;
        },
        //获取机构数据
        savaSchoolList(state, value) {
            state.schollList = value;
        },
    },
    actions: {
        //获取一级类
        getTypeList(context) {
            return new Promise((resolve, rej) => {
                api.getTypeList().then(res => {
                    res.data.forEach((data, index) => {
                        data.imgUrl = navData.firstList[index].imgUrl
                    })
                    context.commit('saveTypeList', res.data)
                    resolve()
                })
            })
        },
        //获取二级类
        getNtypeList(context, params) {
            return new Promise((resolve, rej) => {
                api.getNtypeList(params).then(res => {
                    console.log(res.data)
                        // if(res)
                        // res.data.forEach((type, index) => {
                        //     type.imgUrl = navData.secondList[index].imgUrl
                        // })
                    context.commit('saveNtypeList', res.data)
                    resolve()
                })
            })
        },
        //获取筛选tag的列表数据
        getSelectList(context) {
            return new Promise((resolve, rej) => {
                api.getSelectList().then(res => {
                    context.commit('saveSelectList', res.data)
                    resolve()
                })
            })
        },
        //获取机构数据
        getSchoolList(context, params) {
            return new Promise((resolve, reject) => {
                api.getschoollist(params).then(res => {
                    context.commit('savaSchoolList', res.data)
                    resolve();
                })
            })
        }
    },
    getters: {}
})