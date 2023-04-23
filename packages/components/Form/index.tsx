import { Ref, reactive } from "vue";
import type { modelValue, Column, Rule, DicItem } from "~/types";

import { defineComponent, h, ref } from "vue";
import { formProps, baseColumn, baseOption } from "~/const";
import FormItem from "../FormItem";

import styles from "./index.module.css";

export default defineComponent({
  name: "MForm",
  props: formProps,
  emits: ["update:modelValue", "submit"],
  setup(props, { emit, slots, expose }) {
    const formRef = ref();
    // 表单子项ref
    const formChildRef: { [key: string]: Ref<HTMLElement> } = {};
    // 下拉数据
    const formDicList: { [key: string]: Ref<DicItem> } = {};

    const addChildInfo = (
      type: string,
      key: string,
      data: Ref<HTMLElement> | Ref<DicItem>
    ) => {
      switch (type) {
        case "childRef":
          formChildRef[key] = data as Ref<HTMLElement>;
          break;
        case "dicRef":
          formDicList[key] = data as Ref<DicItem>;
          break;
      }
    };

    // 修改表单数据
    const modifyFormData = (val: modelValue, prop: string) => {
      const form = { ...props.modelValue };
      form[prop] = val;
      emit("update:modelValue", form);
    };

    const assignOption = reactive({
      ...baseOption,
      ...props.option,
    });

    const initForm: { [key: string]: modelValue } = { ...props.modelValue };
    // 默认配置项
    const rules: { [key: string]: Rule[] } = {};
    const column: Column<typeof props.modelValue>[] = props.option.column.map(
      (item: Column<typeof props.modelValue>) => {
        const newItem = {
          labelWidth: assignOption.labelWidth,
          ...baseColumn,
          ...item,
        };
        newItem.disabled =
          assignOption.formType == "view" ? true : newItem.disabled;
        newItem.placeholder =
          item.type === "select"
            ? `请选择${item.label}`
            : `请输入${item.label}`;
        item.rules && (rules[item.prop] = item.rules);
        const { type, prop } = newItem;
        switch (type) {
          case "rate":
            initForm[prop] = props.modelValue[prop] || item.value || 0;
            break;
          case "checkbox":
            initForm[prop] = props.modelValue[prop] || item.value || [];
            break;
          default:
            initForm[prop] = props.modelValue[prop] || item.value || "";
        }
        delete newItem.value;
        return newItem;
      }
    );

    assignOption.column = column;

    // 初始化表单数据
    emit("update:modelValue", initForm);

    // 提交数据
    const handleSubmit = () => {
      formRef.value.validate((valid: boolean, fields: any) => {
        emit("submit", valid, fields);
      });
    };

    // 清空字段
    const handleResetFields = () => {
      formRef.value.resetFields();
    };

    console.log("form data");

    expose({
      initForm,
      formChildRef,
      formDicList,
      formRef,
      assignOption,
      handleSubmit,
      handleResetFields,
    });

    return () => {
      console.log("form render", props.modelValue, "____props.modelValue");
      return (
        <el-form
          ref={formRef}
          model={props.modelValue}
          rules={rules}
          label-position={assignOption.labelPosition}
        >
          <el-row gutter={20}>
            {column.map((item) => {
              return (
                <el-col span={item.span} key={item.prop}>
                  <FormItem
                    {...item}
                    key={item.prop}
                    modelValue={props.modelValue[item.prop]}
                    modifyFormData={modifyFormData}
                    addChildInfo={addChildInfo}
                    v-slots={{
                      label: slots[`${item.prop}Label`],
                      default: slots[item.prop],
                    }}
                  ></FormItem>
                </el-col>
              );
            })}
          </el-row>
          {assignOption.formType !== "view" && (
            <el-row gutter={20} class={styles.mElRow}>
              {assignOption.submitBtn && (
                <el-button type="primary" onClick={handleSubmit}>
                  {assignOption.submitText}
                </el-button>
              )}
              {assignOption.emptyBtn && (
                <el-button onClick={handleResetFields}>
                  {assignOption.emptyText}
                </el-button>
              )}
              {slots.btn && slots.btn()}
            </el-row>
          )}
        </el-form>
      );
    };
  },
});
