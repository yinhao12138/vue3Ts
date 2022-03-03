<template>
  <div class="main-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-success' : 'el-icon-error '"
      @click="handleFoldClick"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
