import type { Component, ConcreteComponent } from "vue";

import { defineComponent, h, resolveComponent, renderSlot } from "vue";
import { formItemAttrs, baseProps } from "~/const";
import { extractKeyFormObject } from "~/utils";
import { mapComponent } from "~/const/mapComponent";

export default defineComponent({
  name: "MFormItem",
  emits: [],
  props: baseProps,
  inheritAttrs: false,
  setup(props, { attrs, slots }) {
    const elFormItem = resolveComponent("el-form-item") as ConcreteComponent;
    // el-form-item props
    const { includeRet } = extractKeyFormObject(attrs, formItemAttrs);
    const type = attrs.type as keyof typeof mapComponent;

    let component: Component = slots.default
      ? slots.default
      : mapComponent[type]
        ? mapComponent[type]()
        : mapComponent["input"]();

    return () =>
      h(
        elFormItem,
        {
          labelWidth: 80,
          ...includeRet,
        },
        {
          label: () => renderSlot(slots, "label"),
          default: () =>
            h(component, {
              modelValue: props.modelValue,
              modifyFormData: props.modifyFormData,
              addChildInfo: props.addChildInfo,
              ...attrs,
            }),
        }
      );
  },
});
