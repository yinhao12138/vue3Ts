export interface IAccount {
  name: string
  password: string
}

export interface IDateType<T = any> {
  code: number
  data: T
}

//登陆类型限定
export interface IloginType {
  id: number
  name: string
  token: string
}
//某些由于数据太多ts限定太麻烦并且不知道哪些必传就用any 如查询用户
