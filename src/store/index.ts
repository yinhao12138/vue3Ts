// import { Store } from 'element-plus/lib/el-table/src/store'
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'codertest',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
//vuex存在内存中防止刷新清除登陆数刷新之后将vuex中数据在从localStorage中取出
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
