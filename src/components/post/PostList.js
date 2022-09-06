import React from 'react';
import Table from '../table/Table';
import TableColumn from '../table/TableColumn';
import TableRow from '../table/TableRow';

function PostList(props) {
  return (
    <div>
      <Table headersName={['글번호', '제목', '등록일', '조회수']}>
        <TableRow>
         <TableColumn>1</TableColumn>
         <TableColumn>첫번째 게시글입니다.</TableColumn>
         <TableColumn>2020-10-25</TableColumn>
         <TableColumn>6</TableColumn>
        </TableRow>
        <TableRow>
         <TableColumn>2</TableColumn>
         <TableColumn>두번째 게시글입니다.</TableColumn>
         <TableColumn>2020-10-25</TableColumn>
         <TableColumn>5</TableColumn>
        </TableRow>
        <TableRow>
         <TableColumn>3</TableColumn>
         <TableColumn>세번째 게시글입니다.</TableColumn>
         <TableColumn>2020-10-25</TableColumn>
         <TableColumn>1</TableColumn>
        </TableRow>
        <TableRow>
         <TableColumn>4</TableColumn>
         <TableColumn>네번째 게시글입니다.</TableColumn>
         <TableColumn>2020-10-25</TableColumn>
         <TableColumn>2</TableColumn>
        </TableRow>
        <TableRow>
         <TableColumn>5</TableColumn>
         <TableColumn>다섯번째 게시글입니다.</TableColumn>
         <TableColumn>2020-10-25</TableColumn>
         <TableColumn>4</TableColumn>
        </TableRow>
      </Table>
    </div>
  );
}

export default PostList;