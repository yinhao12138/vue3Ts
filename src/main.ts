import { createApp, App } from 'vue'
import rontApp from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import 'normalize.css'
import './assets/css/index.less'
//局部导入
import { globalRegister } from './global'

const app: App = createApp(rontApp)
// globalRegister(app)
// use 里可以执行函数默认传入app
createApp(rontApp).use(store).use(router).use(globalRegister).mount('#app')
setupStore()
//全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

// interface DateType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// HyRequest.get<DateType>({
//   url: '/home/multidata',
//   showLoading: false
// }).then((res) => {
//   console.log(res.data)
// })
