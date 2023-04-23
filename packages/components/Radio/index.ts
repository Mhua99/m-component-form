import type { DicItem, DefaultObj } from "~/types";

import { defineComponent, h, resolveComponent, ref } from "vue";
import {
  baseProps,
  selectProps,
  baseExcludeAttrs,
  inputAttrsEvent,
  selectAttrsEvent,
} from "~/const";
import { dealDic, extractKeyFormObject, plusOnEvent } from "~/utils";

const assignProps = { ...baseProps, ...selectProps };
export default defineComponent({
  name: "MRadio",
  props: assignProps,
  inheritAttrs: false,
  setup(props, { attrs }) {
    const elRadioGroup = resolveComponent("el-radio-group");
    const elRadio = resolveComponent("el-radio");

    // 挂载组件实例
    const comRef = ref();
    props.addChildInfo("childRef", attrs.prop, comRef);

    // 字典项
    const dicList = ref<DicItem[]>([]);
    props.addChildInfo("dicRef", attrs.prop, dicList);

    // 更新数据
    const handleChange = (val: string | number) => {
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

    return () =>
      h(
        elRadioGroup,
        {
          ...excludeRet,
          ...eventsName,
          ref: comRef,
          modelValue: props.modelValue,
          onChange: handleChange,
        },
        () =>
          dicList.value.map((item) => {
            const { label, value } = item;
            return h(
              elRadio,
              { ...item, key: `${label}_${attrs.prop}`, label: value },
              () => label
            );
          })
      );
  },
});
