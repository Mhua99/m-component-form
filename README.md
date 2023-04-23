# 基于vue3 和 element-plus 封装的表单组件

在学习 vue3 时封装的组件


## 安装

```bash
yarn add m-component-form
```



在main.ts中引入相关组件，基于 element-plus 封装的，需要先安装 element-plus。

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import mComponent from "m-component"

import 'element-plus/dist/index.css'
import "m-component/dist/style.css"

createApp(App).use(ElementPlus).use(mComponent).mount('#app')
```



## 基本使用

* form组件

```vue
<template>
   <m-form ref="mRef" v-model="state.model" :option="option"> </m-form>
</template>

<script setup lang="ts">
import { reactive, ref  } from "vue";
import type { FormOption } from "m-component"

const mRef = ref();

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

let state = reactive<{ model: StateModel, visible: boolean }>({
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
  visible: false
});


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
```



* dialog 组件基本使用

top：上边距

bottom：下边距

```vue
<m-dialog v-model="state.visible" width="80%" top="10vh" bottom="10vh" title="表单数据" />
```

