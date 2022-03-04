type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItem: IFormItem[]
  labelStyle?: any
  labelWidth?: string
  colLayout?: any
}
