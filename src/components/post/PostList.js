import React, { useState, useEffect } from 'react';
import Table from '../table/Table';
import TableColumn from '../table/TableColumn';
import TableRow from '../table/TableRow';
import data from './data.json';
import { Link } from 'react-router-dom';
import Paging from '../post/Paging';
import { Container } from 'react-bootstrap';


function PostList() {
  
  const [ posts, setPosts ] = useState([]);
  const [ currentPosts, setCurrentPosts ] = useState([]);
  const [ page, setPage ] = useState([1]);
  const handlePageChange = (page) => {setPage(page)};
  const [ postPerPage ] = useState([6]);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    setPosts(data.datas);
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost))
    }, [indexOfFirstPost, indexOfLastPost, page, posts]);

  return (
    <div>
      <Container>
        <Table headersName={['글번호', '제목', '등록일', '조회수']}>
          {
            currentPosts.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableColumn>{ item.no }</TableColumn>
                  <TableColumn>
                    <Link to={`/exercise/postView/${item.no}`}
                    style={{ textDecoration: "none", color: "black"}}>
                        { item.title }
                    </Link>
                  </TableColumn>
                  <TableColumn>{ item.createDate }</TableColumn>
                  <TableColumn>{ item.readCount }</TableColumn>
                </TableRow>
              )
            }) 
          } 
        </Table>
      </Container>
      <Paging 
      totalCount={posts.length} page={page} postPerPage={postPerPage} 
      pageRangeDisplayed={5} handlePageChange={handlePageChange} />  
    </div>
  );
}

export default PostList;