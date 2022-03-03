import { RouteRecordRaw } from 'vue-router'

// 步骤先将vuex中userInfoMenu放入router中再将router放到main->children中
export function mapMenuRouter(userInfoMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载所有routes
  const allRoutes: RouteRecordRaw[] = []
  //require.context webpack的语法导入文件路径true逐一加载递归 /\.ts/正则所有ts文件
  const routesFile = require.context('../router/main', true, /\.ts/)
  routesFile.keys().forEach((item) => {
    const route = require('../router/main' + item.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log(allRoutes)

  // 2.根据菜单需要添加的routes

  return routes
}
