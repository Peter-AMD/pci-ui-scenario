import { ValueFormatterFunc } from "ag-grid-community";

export const numberComparator = (valueA: number, valueB: number) => {
  return (+valueA || 0) - (+valueB || 0);
};

export const numberValueFormatter:
  | string
  | ValueFormatterFunc<any>
  | undefined = (params) => {
  const number = parseFloat(params.value || 0);

  return number.toFixed(2);
};
