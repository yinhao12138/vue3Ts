import { IloginState } from './login/type'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: IloginState
}

export type IStoreType = IRootState & IRootWithModule
