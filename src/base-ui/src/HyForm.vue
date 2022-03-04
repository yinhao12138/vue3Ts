<template>
  <div class="hy-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template
          v-for="item in formItem"
          :key="item.index"
          class="form-search"
        >
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="labelStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="childrenItem in item.options"
                    :key="childrenItem.value"
                    :value="childrenItem.value"
                    >{{ childrenItem.label }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types/type'

export default defineComponent({
  props: {
    formItem: {
      // 传入的数据
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelStyle: {
      type: Object,
      default: () => ({
        padding: '2px 2px'
      })
    },
    labelWidth: {
      type: String,
      default: '55px'
    },
    // 栅格化布局自适应屏幕大小
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 6,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup(props) {
    // console.log(props.labelStyle)
    return {}
  }
})
</script>

<style lang="less" scoped>
.form-search {
}
</style>
