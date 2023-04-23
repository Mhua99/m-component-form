import { defineComponent, h, resolveComponent, ref, computed } from "vue";

import { extractKeyFormObject } from "~/utils";
import { baseProps, baseExcludeAttrs } from "~/const";

export default defineComponent({
  name: "MRate",
  props: baseProps,
  setup(props, { attrs }) {
    const elRate = resolveComponent("el-rate");

    // 挂载组件实例
    const comRef = ref();
    props.addChildInfo("childRef", attrs.prop, comRef);

    // 更新数据
    const handleChange = (val: string | number) => {
      props.modifyFormData(val, attrs.prop);
    };

    // 过滤属性
    const { excludeRet } = extractKeyFormObject(attrs, [...baseExcludeAttrs]);

    // 只接收number类型变量
    const modelValue = computed({
      set(val) {
        props.modifyFormData(val, attrs.prop);
      },
      get() {
        return Number(props.modelValue) || 0;
      },
    });

    return () => {
      return h(elRate, {
        ...excludeRet,
        modelValue: modelValue.value,
        onChange: handleChange,
      });
    };
  },
});
