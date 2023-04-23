import type { ConcreteComponent } from "vue";
import type { DicItem, DefaultObj } from "~/types";

import { defineComponent, h, resolveComponent, ref } from "vue";
import {
  baseProps,
  selectProps,
  baseExcludeAttrs,
  inputAttrsEvent,
  selectAttrsEvent,
} from "~/const";
import { dealDic, extractKeyFormObject, plusOnEvent, useSlots } from "~/utils";

import styles from "./index.module.css";

const assignProps = { ...baseProps, ...selectProps };
export default defineComponent({
  name: "MSelect",
  props: assignProps,
  inheritAttrs: false,
  setup(props, { attrs }) {
    const elSelect = resolveComponent("el-select") as ConcreteComponent;
    const elOption = resolveComponent("el-option");

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

    // 过滤属性
    const { excludeRet } = extractKeyFormObject(attrs, baseExcludeAttrs);

    // 事件加上 on
    const eventsName = plusOnEvent(attrs, [
      ...inputAttrsEvent,
      ...selectAttrsEvent,
    ]);

    // 插槽
    const slotList = useSlots(attrs, ["prefix", "empty"]);

    return () =>
      h(
        elSelect,
        {
          ...excludeRet,
          ...eventsName,
          ref: comRef,
          modelValue: props.modelValue,
          onChange: handleChange,
          class: styles.mSelect,
        },
        {
          default: () =>
            dicList.value.map((item) =>
              h(elOption, { ...item, key: `${item.value}_${attrs.prop}` })
            ),
          ...slotList,
        }
      );
  },
});
