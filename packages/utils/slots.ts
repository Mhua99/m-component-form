import type { VNode } from "vue";
import type { AttrsType, UseSlotsReturn } from "./types";

import { h } from "vue";

export function useSlots(
  obj: AttrsType,
  slotName: Array<string>
): UseSlotsReturn {
  const ret: UseSlotsReturn = {};
  for (let item of slotName) {
    if (obj[item]) {
      const type = typeof obj[item];
      switch (type) {
        case "string":
          ret[item] = obj[item] as string;
          break;
        default:
          ret[item] = h(obj[item] as VNode, {});
      }
    }
  }
  return ret;
}
