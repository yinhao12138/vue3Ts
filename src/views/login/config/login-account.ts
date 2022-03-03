import { reactive } from 'vue'
export const rules = reactive({
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: 'Please enter numbers or letters from 5 to 10',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity password',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: 'Please enter more than 3 numbers or letters',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: 'Please input Phone',
      trigger: 'blur'
    },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: 'Please enter the correct mobile phone number',
      trigger: 'blur'
    }
  ]
})
