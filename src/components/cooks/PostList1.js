import React, { useState, useEffect } from 'react';
import Table1 from '../cooks/Table1';
import TableColumn1 from '../cooks/TableColumn1';
import TableRow1 from '../cooks/TableRow1';
import data1 from './data1.json';
import { Link } from 'react-router-dom';
import Paging1 from '../cooks/Paging1';
import { Container } from 'react-bootstrap';


function PostList1() {
  
  const [ posts, setPosts ] = useState([]);
  const [ currentPosts, setCurrentPosts ] = useState([]);
  const [ page, setPage ] = useState([1]);
  const handlePageChange = (page) => {setPage(page)};
  const [ postPerPage ] = useState([6]);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    setPosts(data1.datas);
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost))
    }, [indexOfFirstPost, indexOfLastPost, page, posts]);

  return (
    <div>
      <Container>
        <Table1 headersName={['글번호', '제목', '등록일', '조회수']}>
          {
            currentPosts.map((item, index) => {
              return (
                <TableRow1 key={index}>
                  <TableColumn1>{ item.no }</TableColumn1>
                  <TableColumn1>
                    <Link to={`/cook/postView/${item.no}`}
                    style={{ textDecoration: "none", color: "black"}}>
                        { item.title }
                    </Link>
                  </TableColumn1>
                  <TableColumn1>{ item.createDate }</TableColumn1>
                  <TableColumn1>{ item.readCount }</TableColumn1>
                </TableRow1>
              )
            }) 
          } 
        </Table1>
      </Container>
      <Paging1 
      totalCount={posts.length} page={page} postPerPage={postPerPage} 
      pageRangeDisplayed={5} handlePageChange={handlePageChange} />  
    </div>
  );
}

export default PostList1;