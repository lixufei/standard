import React from "react";
import {AgGridReact} from "ag-grid-react";
import StockJson from './StockData';
import StockSchema from './FieldSchema';

class StockTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: this.createColumnDefs(),
      rowData: this.createRowData()
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  createColumnDefs() {
    return StockSchema;
  }

  createRowData() {
    const displayData = StockJson.map(function (stock) {
      stock.actual_arrived_date = new Date(stock.actual_arrived_date);
      stock.estimated_arrived_date = new Date(stock.estimated_arrived_date);
      return stock;
    });
    return displayData;
  }

  render() {
    let containerStyle = {
      height: 115,
      width: 1500
    };

    return (
      <div style={containerStyle} className="ag-fresh">
        <h1>标准件库存表</h1>
        <AgGridReact
          // properties
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}

          // events
          onGridReady={this.onGridReady}>
        </AgGridReact>
      </div>
    )
  }
};

export default StockTable;
