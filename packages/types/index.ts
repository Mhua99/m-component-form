export type modelValue =
  | string
  | number
  | string[]
  | number[]
  | boolean
  | undefined;

export type DefaultObj = { [key: string]: modelValue };

export interface Rule {
  [key: string]: string | number | boolean | undefined;
}

export declare interface FormOption<T> {
  formType?: string;
  labelWidth?: number;
  labelPosition?: string;
  submitBtn?: true;
  emptyBtn?: true;
  submitText?: string;
  emptyText?: string;
  column: Column<T>[];
}

export interface Column<T> {
  label: string;
  prop: keyof T;
  type?: string;
  display?: boolean;
  disabled?: boolean;
  span?: number;
  placeholder?: string;
  labelWidth?: number;
  value?: string | number;
  rules?: Rule[];
  [string: string]: any
}

export interface DicItem {
  label: string | number;
  value: string | number;
}

export interface DicOptions {
  result?: string;
  label?: string;
  value?: string;
}

export type DicData = DefaultObj[] | ((params?: any) => Promise<unknown>);
