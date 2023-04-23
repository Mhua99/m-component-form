import type { Ref } from "vue";
import type { DicItem, DicData, DicOptions, DefaultObj } from "~/types";

function mapState(
  dicList: Ref<DicItem[]>,
  list: DefaultObj[],
  options: Required<Omit<DicOptions, "result">>
) {
  if (!Array.isArray(list)) return console.error(new Error("下拉数据异常"));
  dicList.value = list.map((item) => {
    return {
      label: item[options.label],
      value: item[options.value],
      ...item,
    };
  }) as DicItem[];
}

export function dealDic(
  dicList: Ref<DicItem[]>,
  dicData: DicData,
  dicOptions: DicOptions
): void {
  const options = {
    label: "label",
    value: "value",
    ...dicOptions,
  };

  if (Array.isArray(dicData)) {
    mapState(dicList, dicData, options);
  } else if (dicData instanceof Promise) {
    dicData.then((res) => {
      const list = dicOptions.result
        ? eval(dicOptions.result)
        : eval("res.data");
      mapState(dicList, list, options);
    });
  }
}
