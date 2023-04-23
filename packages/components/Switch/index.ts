import { defineComponent, h, resolveComponent, ref } from "vue";
import { baseProps, inputAttrsEvent, baseExcludeAttrs } from "~/const";
import { plusOnEvent, extractKeyFormObject } from "~/utils";

export default defineComponent({
  name: "MSwitch",
  props: baseProps,
  emits: ["update:modelValue"],
  inheritAttrs: false,
  setup(props, { attrs }) {
    const elSwitch = resolveComponent("el-switch");

    // 数据
    const handleInput = (val: boolean) => {
      props.modifyFormData(Number(val), attrs.prop);
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
      h(elSwitch, {
        activeValue: 1,
        inactiveValue: 0,
        ...excludeRet,
        ...eventsName,
        ref: comRef,
        modelValue: props.modelValue,
        onInput: handleInput,
      });
  },
});
