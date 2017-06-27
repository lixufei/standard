import React from 'react';
import ReactDom from 'react-dom';

// import "ag-grid-root/dist/styles/ag-grid.css";
// import "ag-grid-root/dist/styles/theme-fresh.css";

import StockTableComponent from './components/StockTable.jsx';
import LoginComponent from './components/Login';

//render stock table
// ReactDom.render(
//   <StockTableComponent />,
//   document.getElementById('content')
// );

ReactDom.render(
  <LoginComponent />,
  document.getElementById('content')
);

// document.addEventListener('DOMContentLoaded', () => {
//   render(
//     <StockTableComponent/>,
//     document.querySelector('#content')
//   );
// });
