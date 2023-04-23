import { defineComponent, h, resolveComponent, ref } from "vue";
import { baseProps, inputAttrsEvent, baseExcludeAttrs } from "~/const";
import { plusOnEvent, extractKeyFormObject } from "~/utils";

import styles from "./index.module.css";

export default defineComponent({
  name: "MInputNumber",
  props: baseProps,
  emits: ["update:modelValue"],
  inheritAttrs: false,
  setup(props, { attrs }) {
    const elInputNumber = resolveComponent("el-input-number");

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

    return () =>
      h(elInputNumber, {
        controlsPosition: "right",
        ...excludeRet,
        ...eventsName,
        ref: comRef,
        modelValue: props.modelValue,
        onInput: handleInput,
        class: styles.mInputNumber,
      });
  },
});
