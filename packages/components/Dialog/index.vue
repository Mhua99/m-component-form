<template>
  <el-dialog class="mDialog" v-model="modelValue" v-bind="$attrs" :fullscreen="props.fullscreen" :style="style">
    <template v-for="(__, slotName) in $slots" v-slot:[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </el-dialog>
</template>

<script lang="ts">
export default { name: "MDialog" }
</script>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from "vue"

const emits = defineEmits(["update:modelValue"])

const props = defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  top: {
    type: String as PropType<string>,
    default: "15vh"
  },
  bottom: {
    type: String as PropType<string>,
    default: "15vh"
  },
  fullscreen: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

// 样式计算
const style = computed(() => {
  let ret = {}
  if (!props.fullscreen) {
    ret = {
      marginTop: props.top,
      marginBottom: props.bottom,
      height: `calc(100% - ${props.top} - ${props.bottom})`
    }
  }
  return ret
})

const modelValue = computed({
  set(val: boolean) {
    emits("update:modelValue", val);
  },
  get() {
    return props.modelValue
  }
})
</script>

<style>
.mDialog {
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
}

.mDialog .el-dialog__header {
  border-bottom: 1px solid #efefef;
}

.mDialog .el-dialog__body {
  overflow: auto;
  padding-top: 10px;
}
</style>
