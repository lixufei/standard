import React from 'react';
import ReactDom from 'react-dom';

import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";

import Component1 from './components/Component1.jsx';

ReactDom.render(
  <Component1 />,
  document.getElementById('content')
);

// document.addEventListener('DOMContentLoaded', () => {
//   render(
//     <Component1/>,
//     document.querySelector('#content')
//   );
// });
