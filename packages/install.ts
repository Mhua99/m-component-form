import type { App, Component } from "vue";

export type {
  FormOption,
  Column
} from "./types"

import * as components from "./components";

export default {
  install(Vue: App) {
    Object.values(components).forEach((component: Component) => {
      Vue.component(component.name!, component);
    });
  },
};
