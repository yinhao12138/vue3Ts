<template>
  <div class="login-panel">
    <h3 class="login-title">Vue3+Ts</h3>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登陆 </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登陆 </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="login-panel-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" @click="forgetPassword">忘记密码</el-link>
    </div>
    <el-button
      type="primary"
      style="width: 100%; margin-top: 10px"
      @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
import { ElNotification } from 'element-plus'

export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    //属性
    const isKeepPassword = ref(true)
    // 拿到loginAccount的类型是对象类型
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    const currentTab = ref<string>('account')
    //方法
    const handleLogin = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.accountLogin(isKeepPassword.value)
      } else {
        phoneRef.value?.phoneLogin()
      }
    }
    const forgetPassword = () => {
      ElNotification({
        type: 'error',
        message: 'Mind my shit',
        position: 'bottom-right'
      })
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      forgetPassword,
      handleLogin
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 35%;
  .login-title {
    text-align: center;
  }
  .login-panel-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
