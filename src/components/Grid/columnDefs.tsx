import { ColDef } from "ag-grid-community";
import { dateComparator, mapDateToReadable } from "../../utils/date";
import { numberComparator, numberValueFormatter } from "../../utils/number";

export const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    sortable: true,
    filter: true,
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    sortable: true,
    comparator: dateComparator,
    valueFormatter: mapDateToReadable,
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    sortable: true,
    comparator: numberComparator,
    filter: "agNumberColumnFilter",
    floatingFilter: false,
    valueFormatter: numberValueFormatter,
  },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    sortable: true,
    comparator: numberComparator,
    filter: "agNumberColumnFilter",
    floatingFilter: false,
    valueFormatter: numberValueFormatter,
  },
  {
    field: "q_au_1",
    headerName: "q (au)",
    sortable: true,
    comparator: numberComparator,
    filter: "agNumberColumnFilter",
    floatingFilter: false,
    valueFormatter: numberValueFormatter,
  },
  {
    field: "q_au_2",
    headerName: "Q (au)",
    sortable: true,
    comparator: numberComparator,
    filter: "agNumberColumnFilter",
    floatingFilter: false,
    valueFormatter: numberValueFormatter,
  },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    sortable: true,
    comparator: numberComparator,
    filter: "agNumberColumnFilter",
    floatingFilter: false,
    valueFormatter: numberValueFormatter,
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    sortable: true,
    comparator: numberComparator,
    filter: "agNumberColumnFilter",
    floatingFilter: false,
    valueFormatter: numberValueFormatter,
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    valueFormatter: ({ value }) => {
      switch (value) {
        case "Y":
          return "Yes";
        case "N":
          return "No";
        default:
          return "";
      }
    },
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    sortable: true,
  },
];
