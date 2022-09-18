import React from 'react';
import '../table/Table.css';

function Table2(props) {
  const { headersName, children } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <td className="table-header-column" key={index}>{ item }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default Table2;