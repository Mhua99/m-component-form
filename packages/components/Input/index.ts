import type { ConcreteComponent } from "vue";

import { defineComponent, h, resolveComponent, ref } from "vue";
import { baseProps, inputAttrsEvent, baseExcludeAttrs } from "~/const";
import { plusOnEvent, extractKeyFormObject, useSlots } from "~/utils";

export default defineComponent({
  name: "MInput",
  props: baseProps,
  emits: ["update:modelValue"],
  inheritAttrs: false,
  setup(props, { attrs }) {
    const elInput = resolveComponent("el-input") as ConcreteComponent;

    // 数据
    const handleInput = (val: string) => {
      props.modifyFormData(val, attrs.prop);
    };

    // 挂载 ref
    const comRef = ref();
    props.addChildInfo("childRef", attrs.prop, comRef);

    // 事件加上 on
    const eventsName = plusOnEvent(attrs, inputAttrsEvent);
    
    // 过滤属性
    const { excludeRet } = extractKeyFormObject(attrs, [
      ...inputAttrsEvent,
      ...baseExcludeAttrs,
    ]);

    // 插槽
    const slotList = useSlots(attrs, ["prepend", "append"]);

    return () =>
      h(
        elInput,
        {
          ...excludeRet,
          ...eventsName,
          rows: 6,
          resize: "none",
          ref: comRef,
          modelValue: props.modelValue,
          onInput: handleInput,
        },
        {
          ...slotList,
        }
      );
  },
});
