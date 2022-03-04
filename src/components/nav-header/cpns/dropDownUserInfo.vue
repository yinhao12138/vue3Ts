<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :size="40" src="circleUrl"></el-avatar>
      <span> {{ userName }}</span>
      <el-icon class="el-icon--right"> </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登陆</el-dropdown-item>
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item divided>退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'dropDownUserInfo',
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.login.userInfo.name)
    return {
      userName
    }
  }
})
</script>

<style lang="less" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  span {
    padding: 0 15px;
  }
}
</style>
