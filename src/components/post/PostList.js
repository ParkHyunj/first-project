import React, { useState, useEffect } from 'react';
import Table from '../table/Table';
import TableColumn from '../table/TableColumn';
import TableRow from '../table/TableRow';
import data from './data.json';

function PostList() {
  const [dataList, setDataList ] = useState([]);
  
  useEffect(() => {
    setDataList(data.datas);
  }, []);

  return (
    <div>
      <Table headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableColumn>{ item.no }</TableColumn>
                <TableColumn>{ item.title }</TableColumn>
                <TableColumn>{ item.createDate }</TableColumn>
                <TableColumn>{ item.readCount }</TableColumn>
              </TableRow>
            )
          }) : ''
        } 
      </Table>
    </div>
  );
}

export default PostList;