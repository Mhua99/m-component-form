import { defineComponent, h, computed, ref } from "vue";
import {
  baseProps,
  inputAttrsEvent,
  baseExcludeAttrs,
  dateAttrsEvent,
} from "~/const";
import { plusOnEvent, extractKeyFormObject } from "~/utils";

export default defineComponent({
  name: "MDatePicker",
  props: baseProps,
  emits: ["update:modelValue"],
  inheritAttrs: false,
  setup(props, { attrs }) {
    // 挂载 ref
    const comRef = ref<HTMLElement>();
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
    const eventsName = plusOnEvent(attrs, dateAttrsEvent);

    // 过滤属性
    const { excludeRet } = extractKeyFormObject(attrs, [
      ...inputAttrsEvent,
      ...baseExcludeAttrs,
    ]);

    return () => {
      return (
        <el-date-picker
          startPlaceholder="请输入开始时间"
          endPlaceholder="请输入结束时间"
          style={{ width: "100%" }}
          {...eventsName}
          {...excludeRet}
          v-model={modelValue.value}
          ref={comRef}
        ></el-date-picker>
      );
    };
  },
});
