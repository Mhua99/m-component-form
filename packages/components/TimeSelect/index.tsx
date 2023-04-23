import { defineComponent, h, computed, ref } from "vue";
import { baseProps, inputAttrsEvent, baseExcludeAttrs } from "~/const";
import { plusOnEvent, extractKeyFormObject } from "~/utils";

export default defineComponent({
  name: "MTimeSelect",
  props: baseProps,
  emits: ["update:modelValue"],
  inheritAttrs: false,
  setup(props, { attrs }) {
    // 挂载 ref
    const comRef = ref();
    props.addChildInfo("childRef", attrs.prop, comRef);

    let modelValue = computed({
      set(val) {
        props.modifyFormData(val, attrs.prop);
      },
      get() {
        return props.modelValue;
      },
    });

    // 事件加上 on
    const eventsName = plusOnEvent(attrs, inputAttrsEvent);

    // 过滤属性
    const { excludeRet } = extractKeyFormObject(attrs, [
      ...inputAttrsEvent,
      ...baseExcludeAttrs,
    ]);

    return () => {
      return (
        <el-time-select
          style={{ width: "100%" }}
          {...eventsName}
          {...excludeRet}
          v-model={modelValue.value}
          ref={comRef}
        ></el-time-select>
      );
    };
  },
});
