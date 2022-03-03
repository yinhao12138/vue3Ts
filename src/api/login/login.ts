import hyRequest from '@/api/config'
import { IAccount, IloginType, IDateType } from './type'

//枚举
enum loginApi {
  AccountLogin = '/login',
  UserInfoById = '/users/',
  UserInfoMenu = '/role/'
}

export function loginUser(data: IAccount) {
  //IDateType里面包含IloginType类型列入 data.id
  return hyRequest.post<IDateType<IloginType>>({
    url: loginApi.AccountLogin,
    data
  })
}

export function getUserById(id: number) {
  return hyRequest.get<IDateType>({
    url: loginApi.UserInfoById + id,
    showLoading: false
  })
}

export function getUserByIdMenu(id: number) {
  return hyRequest.get<IDateType>({
    url: loginApi.UserInfoMenu + id + '/menu',
    showLoading: false
  })
}
