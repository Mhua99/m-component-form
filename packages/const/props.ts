import type { PropType } from "vue";
import type { modelValue, FormOption, DefaultObj, DicData } from "~/types";

export const baseProps = {
  modelValue: { type: [String, Number, Array] as PropType<modelValue> },
  modifyFormData: { type: Function as PropType<Function>, default: () => {} },
  addChildInfo: { type: Function as PropType<Function>, default: () => {} },
};

export const selectProps = {
  dicOptions: {
    type: Object as PropType<DefaultObj>,
    default: () => ({}),
  },
  dicData: {
    type: [Promise, Array] as PropType<DicData>,
  },
};

export const formItemProps = {
  prop: { type: String as PropType<string> },
  label: { type: String as PropType<string> },
  labelWidth: { type: String as PropType<string> },
  rules: { type: Array as PropType<DefaultObj[]> },
  error: { type: String as PropType<string> },
};

export const formProps = {
  modelValue: {
    type: Object as PropType<DefaultObj>,
    default() {
      return {};
    },
  },
  option: {
    type: Object as PropType<FormOption<DefaultObj>>,
    default() {
      return { column: [] };
    },
  },
};
