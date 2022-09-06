import React from 'react';

function TableColumn({ children }) {
  return (
    <td className="table-column">
      {
        children
      }
    </td>
  );
}

export default TableColumn;