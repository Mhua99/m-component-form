import type { Column, DicItem, FormOption } from "~/types";

export const baseOption: Omit<FormOption<unknown>, "column"> = {
  submitBtn: true,
  submitText: "提交",
  emptyBtn: true,
  emptyText: "清空",
  formType: "edit",
  labelWidth: 100,
  labelPosition: "right",
};

export const baseColumn: Column<{ default: string }> = {
  label: "",
  prop: "default",
  display: true,
  disabled: false,
  type: "input",
  span: 12,
};

export const dicOptions: DicItem = {
  label: "label",
  value: "value",
};
