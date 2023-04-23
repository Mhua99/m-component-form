<template>
  <div>
    <button @click="state.visible = true">点我</button>
    <m-dialog
      v-model="state.visible"
      width="80%"
      top="10vh"
      bottom="10vh"
      title="表单数据"
    >
      <m-form ref="mRef" v-model="state.model" :option="option"> </m-form>
    </m-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { MForm } from "../packages/";
import { MDialog } from "../packages/";
import type { FormOption } from "~/types";

const mRef = ref();
console.log(mRef);

interface StateModel {
  name?: string;
  number?: number;
  textarea?: string;
  radio?: string;
  date?: string;
  timeSelect?: string;
  checkbox?: string;
  select?: string;
  rate?: string;
  hello?: string;
}

let state = reactive<{ model: StateModel; visible: boolean }>({
  model: {
    name: "",
    number: 1,
    textarea: "",
    radio: "",
    date: "",
    timeSelect: "",
    checkbox: "",
    select: "",
    rate: "",
  },
  visible: false,
});

watch(
  () => state.model,
  (val) => {
    console.log(val, "____val___");
  },
  {
    deep: true,
  }
);

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = [
        { dicLabel: "苹果", dicValue: "apple" },
        { dicLabel: "香蕉", dicValue: "banner" },
      ];
      const res = {
        data: list,
      };
      resolve(res);
    }, 1000);
  });
}

const option: FormOption<StateModel> = {
  formType: "edit",
  column: [
    {
      label: "name",
      prop: "name",
      span: 24,
      rules: [
        {
          required: true,
          message: "必填项",
          trigger: "blur",
        },
      ],
    },
    {
      label: "number",
      prop: "number",
      type: "number",
      value: 9,
      step: 10,
      rules: [
        {
          required: true,
          message: "必填项",
          trigger: "blur",
        },
      ],
    },
    {
      label: "select",
      prop: "select",
      type: "select",
      dicData: getData(),
      dicOptions: {
        result: "res.data",
        label: "dicLabel",
        value: "dicValue",
      },
      rules: [
        {
          required: true,
          message: "必填项",
          trigger: "blur",
        },
      ],
    },
    {
      label: "rate",
      prop: "rate",
      type: "rate",
      rules: [
        {
          required: true,
          message: "必填项",
          trigger: "blur",
        },
      ],
    },
    {
      label: "textarea",
      prop: "textarea",
      type: "textarea",
      span: 24,
      rules: [
        {
          required: true,
          message: "必填项",
          trigger: "blur",
        },
      ],
    },
    {
      label: "radio",
      prop: "radio",
      type: "radio",
      span: 24,
      dicData: [
        {
          label: "苹果",
          value: "apple",
        },
        {
          label: "香蕉",
          value: "banner",
        },
      ],
    },
    {
      label: "date",
      prop: "date",
      type: "date",
      span: 24,
      valueFormat: "YYYY-MM-DD",
      format: "YYYY/MM/DD",
    },
    {
      label: "timeSelect",
      prop: "timeSelect",
      type: "timeSelect",
      span: 24,
    },
    {
      label: "checkbox",
      prop: "checkbox",
      type: "checkbox",
      span: 24,
      dicData: [
        {
          label: "苹果",
          value: "apple",
        },
        {
          label: "香蕉",
          value: "banner",
        },
      ],
    },
  ],
};
</script>

<style scoped></style>
