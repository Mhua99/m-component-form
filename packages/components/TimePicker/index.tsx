import { defineComponent, h, computed, ref } from "vue";
import {
  baseProps,
  inputAttrsEvent,
  baseExcludeAttrs,
  timeAttrsEvent,
} from "~/const";
import { plusOnEvent, extractKeyFormObject } from "~/utils";

export default defineComponent({
  name: "MTimePicker",
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
    const eventsName = plusOnEvent(attrs, timeAttrsEvent);

    // 过滤属性
    const { excludeRet } = extractKeyFormObject(attrs, [
      ...inputAttrsEvent,
      ...baseExcludeAttrs,
    ]);

    return () => {
      return (
        <el-time-picker
          format="HH:mm:ss"
          value-format="HH:mm:ss"
          {...eventsName}
          {...excludeRet}
          v-model={modelValue.value}
          ref={comRef}
        ></el-time-picker>
      );
    };
  },
});
