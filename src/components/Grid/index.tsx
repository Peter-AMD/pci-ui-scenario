import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useCallback, useRef } from "react";
import { columnDefs } from "./columnDefs";
import data from "../../data/near-earth-asteroids.json";

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<AgGridReact>(null);

  const clearSortAndFilter = useCallback(() => {
    const currentGrid = gridRef.current;
    if (!currentGrid) {
      return;
    }
    gridRef.current.columnApi.applyColumnState({
      defaultState: { sort: null },
    });
    currentGrid.api?.setFilterModel(null);
  }, []);

  // issue with filter number equals
  // isseu with selection
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <button
        type="button"
        onClick={clearSortAndFilter}
        style={{ marginBottom: "15px" }}
      >
        Clear Filters and Sorters
      </button>
      <AgGridReact
        ref={gridRef}
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={"always"}
        enableRangeSelection={true}
        copyHeadersToClipboard={true}
      />
    </div>
  );
};

export default NeoGrid;
