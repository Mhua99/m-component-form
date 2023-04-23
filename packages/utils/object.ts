import type { AttrsType } from "./types";

// 事件处理，如：输入 focus 事件，拼接成 onFocus 事件
export function plusOnEvent(
  obj: AttrsType,
  eventName: string[]
): Pick<AttrsType, keyof AttrsType> {
  let ret: AttrsType = {};
  for (let key in obj) {
    const isExist = eventName.includes(key);
    if (isExist) {
      const newKey = "on" + key.slice(0, 1).toUpperCase() + key.slice(1);
      ret[newKey] = obj[key];
    }
  }
  return ret;
}

interface extractKeyFormObjectReturnType {
  includeRet: Pick<AttrsType, keyof AttrsType>;
  excludeRet: Pick<AttrsType, keyof AttrsType>;
}

/*
  * 从对象中提取指定key值
  * @args  obj 对象   keyList：获取对应的key
  * @return  { includeRet, excludeRet }
  *
*/
export function extractKeyFormObject(
  obj: AttrsType,
  keyList: string
): extractKeyFormObjectReturnType;
export function extractKeyFormObject(
  obj: AttrsType,
  keyList: string[]
): extractKeyFormObjectReturnType;

export function extractKeyFormObject(
  obj: AttrsType,
  keyList: string | string[]
): extractKeyFormObjectReturnType {
  let includeRet: AttrsType = {};
  let excludeRet: AttrsType = {};

  if (typeof keyList === "string") {
    keyList = keyList.split(",");
  }

  for (let key in obj) {
    const isExist = keyList.includes(key);
    isExist ? (includeRet[key] = obj[key]) : (excludeRet[key] = obj[key]);
  }
  return { includeRet, excludeRet };
}
