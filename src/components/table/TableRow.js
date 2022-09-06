import React from 'react';

function TableRow({ children }) {
  return (
    <tr className="table-row">
      {
        children
      }
    </tr>
  );
}

export default TableRow;