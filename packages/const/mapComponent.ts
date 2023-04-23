import {
  MInput,
  MSelect,
  MRate,
  MInputNumber,
  MRadio,
  MDatePicker,
  MSwitch,
  MTimePicker,
  MTimeSelect,
  MCheckbox,
} from "../";

const mapComponent = {
  input: () => MInput,
  textarea: () => MInput,
  number: () => MInputNumber,
  select: () => MSelect,
  rate: () => MRate,
  radio: () => MRadio,
  date: () => MDatePicker,
  month: () => MDatePicker,
  year: () => MDatePicker,
  dates: () => MDatePicker,
  datetime: () => MDatePicker,
  daterange: () => MDatePicker,
  switch: () => MSwitch,
  time: () => MTimePicker,
  timeSelect: () => MTimeSelect,
  checkbox: () => MCheckbox,
};

export { mapComponent };
