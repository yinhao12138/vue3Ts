import { Module } from 'vuex'
//导入类型
import { IAccount } from '@/api/login/type'
import { IloginState } from './type'
import { IRootState } from '../type'
//接口
import { loginUser, getUserById, getUserByIdMenu } from '@/api/login/login'
//保存到localStorage
import localCache from '@/utils/cache'
//导入路由
import router from '@/router'
// 动态路由
import { mapMenuRouter } from '../../utils/map-menu'

const loginMoudle: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userInfoMenu: []
    }
  },
  mutations: {
    //存放token到vuex
    getToken(state, token: string) {
      state.token = token
    },
    //存放用户信息
    getUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    //存放用户菜单
    getUserInfoMenu(state, userInfoMenu: any) {
      state.userInfoMenu = userInfoMenu
      mapMenuRouter(userInfoMenu)
    }
  },
  actions: {
    async accountLogin({ commit, dispatch }, payload: IAccount) {
      //账号登陆逻辑
      const loginResult = await loginUser(payload)
      const { id, token } = loginResult.data
      // dispatch('getInitialDataAction', null, { root: true })
      //存放token
      commit('getToken', token)
      localCache.setCache('token', token)
      //请求用户信息
      const userInfoByIdResult = await getUserById(id)
      const userInfo = userInfoByIdResult.data
      commit('getUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      //请求用户菜单
      const userInfoByIdMenuResult = await getUserByIdMenu(userInfo.role.id)
      const userInfoMenu = userInfoByIdMenuResult.data
      commit('getUserInfoMenu', userInfoMenu)
      localCache.setCache('userInfoMenu', userInfoMenu)

      router.push('./main')
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('getToken', token)
        // dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('getUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userInfoMenu')
      if (userMenus) {
        commit('getUserInfoMenu', userMenus)
      }
    }
    //手机登陆
    // phoneLogin({ commit }, payload: any) {
    //   console.log('123')
    // }
  }
}

export default loginMoudle
