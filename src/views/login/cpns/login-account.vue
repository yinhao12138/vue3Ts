<template>
  <div class="login-account">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
//拿到ElForm的类型
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/login-account'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const ruleForm = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const ruleFormRef = ref<InstanceType<typeof ElForm>>()
    const accountLogin = (isKeepPassword: boolean) => {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          //是否记住密码
          if (isKeepPassword) {
            localCache.setCache('name', ruleForm.name)
            localCache.setCache('password', ruleForm.password)
          } else {
            localCache.removeCache('name')
            localCache.removeCache('password')
          }
          store.dispatch('login/accountLogin', { ...ruleForm })
        }
      })
    }
    return {
      ruleForm,
      rules,
      ruleFormRef,
      accountLogin
    }
  }
})
</script>

<style scoped></style>
