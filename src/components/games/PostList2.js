import React, { useState, useEffect } from 'react';
import Table2 from '../games/Table2';
import TableColumn2 from '../games/TableColumn2';
import TableRow2 from '../games/TableRow2';
import data2 from './data2.json';
import { Link } from 'react-router-dom';
import Paging2 from '../games/Paging2';
import { Container } from 'react-bootstrap';


function PostList2() {
  
  const [ posts, setPosts ] = useState([]);
  const [ currentPosts, setCurrentPosts ] = useState([]);
  const [ page, setPage ] = useState([1]);
  const handlePageChange = (page) => {setPage(page)};
  const [ postPerPage ] = useState([6]);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    setPosts(data2.datas);
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost))
    }, [indexOfFirstPost, indexOfLastPost, page, posts]);

  return (
    <div>
      <Container>
        <Table2 headersName={['글번호', '제목', '등록일', '조회수']}>
          {
            currentPosts.map((item, index) => {
              return (
                <TableRow2 key={index}>
                  <TableColumn2>{ item.no }</TableColumn2>
                  <TableColumn2>
                    <Link to={`/game/postView/${item.no}`}
                    style={{ textDecoration: "none", color: "black"}}>
                        { item.title }
                    </Link>
                  </TableColumn2>
                  <TableColumn2>{ item.createDate }</TableColumn2>
                  <TableColumn2>{ item.readCount }</TableColumn2>
                </TableRow2>
              )
            }) 
          } 
        </Table2>
      </Container>
      <Paging2 
      totalCount={posts.length} page={page} postPerPage={postPerPage} 
      pageRangeDisplayed={5} handlePageChange={handlePageChange} />  
    </div>
  );
}

export default PostList2;