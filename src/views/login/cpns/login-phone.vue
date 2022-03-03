<template>
  <div class="login-phone">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="login-phone-getCode">
          <el-input v-model="ruleForm.code"></el-input>
          <el-button type="primary" class="login-phone-code"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/login-account'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      phone: '',
      code: ''
    })
    const ruleFormRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()
    const phoneLogin = () => {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          console.log('手机登录')
          store.dispatch('login/phoneLogin', { ...ruleForm })
        }
      })
    }
    return {
      ruleForm,
      rules,
      ruleFormRef,
      phoneLogin
    }
  }
})
</script>

<style scoped lang="less">
.login-phone-getCode {
  display: flex;
  .login-phone-code {
    margin-left: 8px;
  }
}
</style>
