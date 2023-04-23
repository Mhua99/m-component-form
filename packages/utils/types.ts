import type { VNode } from "vue";

export interface CommObj {
  [key: string]: () => void | string | number | string[] | number[];
}

export interface AttrsType {
  [key: string]: unknown | (() => unknown);
}

export interface UseSlotsReturn {
  [key: string]: VNode | string
}