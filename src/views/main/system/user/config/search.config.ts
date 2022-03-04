import { IForm } from '@/base-ui/types/type'

export const searchFormConfig: IForm = {
  formItem: [
    {
      type: 'input',
      label: 'ID',
      placeholder: '请输入ID'
    },
    {
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '爱好',
      options: [
        { label: '国产', value: 'China' },
        { label: '岛国', value: 'Jap' },
        { label: '欧美', value: 'USA' }
      ]
    },
    {
      type: 'datepicker',
      label: '日期',
      otherOptions: {
        startPlaceholder: 'start-time',
        endPlaceholder: 'end-time',
        type: 'daterange'
      }
    }
  ],
  colLayout: {
    lg: 6
  }
}
