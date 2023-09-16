import { ValueFormatterFunc } from "ag-grid-community";

const monthMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const dateComparator = (date1: string, date2: string) => {
  const date1Number = monthToComparableNumber(date1);
  const date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
};

export const getDayYearMonth = (date: string) => {
  const year = Number.parseInt(date.substring(0, 4));
  const month = Number.parseInt(date.substring(5, 7));
  const day = Number.parseInt(date.substring(8, 10));

  return {
    year,
    month,
    day,
  };
};

// eg 2011-01-07 gets converted to 20040829
export const monthToComparableNumber = (date: string) => {
  if (date === undefined || date === null || date.length < 10) {
    return null;
  }
  const { year, month, day } = getDayYearMonth(date);

  return year * 10000 + month * 100 + day;
};

export const mapDateToReadable: string | ValueFormatterFunc<any> | undefined = (
  params
) => {
  if (!params.value) {
    return params.value;
  }

  const { year, month, day } = getDayYearMonth(params.value);
  return `${day} ${monthMap[month - 1]} ${year}`;
};
