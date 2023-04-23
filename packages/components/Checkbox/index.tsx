import type { DicItem, DefaultObj } from "~/types";

import { defineComponent, h, resolveComponent, ref, computed } from "vue";
import {
  baseProps,
  selectProps,
  baseExcludeAttrs,
  inputAttrsEvent,
  selectAttrsEvent,
} from "~/const";
import { dealDic, extractKeyFormObject, plusOnEvent } from "~/utils";

// 处理数据
function dealData(val: unknown) {
  if (Array.isArray(val)) {
    return val;
  } else if (typeof val === "string") {
    return val.split(",");
  }
  return [];
}

const assignProps = { ...baseProps, ...selectProps };

export default defineComponent({
  name: "MCheckbox",
  props: assignProps,
  inheritAttrs: false,
  setup(props, { attrs }) {
    const elCheckboxGroup = resolveComponent("el-checkbox-group");
    const elCheckbox = resolveComponent("el-checkbox");

    // 挂载组件实例
    const comRef = ref<HTMLElement>();
    props.addChildInfo("childRef", attrs.prop, comRef);

    // 字典项
    const dicList = ref<DicItem[]>([]);
    props.addChildInfo("dicRef", attrs.prop, dicList);

    // 更新数据
    const handleChange = (val: string | number | Array<string | number>) => {
      props.modifyFormData(val, attrs.prop);
    };

    // 处理字典项
    dealDic(dicList, props.dicData as DefaultObj[], props.dicOptions);

    // 事件加上 on
    const eventsName = plusOnEvent(attrs, [
      ...inputAttrsEvent,
      ...selectAttrsEvent,
    ]);

    // 过滤属性
    const { excludeRet } = extractKeyFormObject(attrs, baseExcludeAttrs);

    // 只接收数组类型数据
    const modelValue = computed({
      set(val) {
        // 字符串转化为数组
        const resValue = dealData(val);
        props.modifyFormData(resValue, attrs.prop);
      },
      get() {
        return dealData(props.modelValue);
      },
    });

    return () =>
      h(
        elCheckboxGroup,
        {
          ...excludeRet,
          ...eventsName,
          ref: comRef,
          modelValue: modelValue.value,
          onChange: handleChange,
        },
        () =>
          dicList.value.map((item) => {
            const { label, value } = item;
            return h(
              elCheckbox,
              { ...item, key: `${label}_${attrs.prop}`, label: value },
              () => label
            );
          })
      );
  },
});
