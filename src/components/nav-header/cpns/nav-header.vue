<template>
  <div class="main-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-success' : 'el-icon-error '"
      @click="handleFoldClick"
    ></i>
    <div class="mian-conten">
      <div>面包屑</div>
      <dropDownUserInfo></dropDownUserInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dropDownUserInfo from './dropDownUserInfo.vue'

export default defineComponent({
  components: {
    dropDownUserInfo
  },
  emit: ['foldChange'],
  setup(prop, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.main-header {
  display: flex;
  width: 100%;
  .fold-menu {
    display: flex;
    font-size: 30px;
    cursor: pointer;
    align-items: center;
  }
  .mian-conten {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
