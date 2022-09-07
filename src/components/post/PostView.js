import React, { useEffect, useState } from 'react';
import PostNo from './data.json';
import './Post.css';

function PostView() {
  
  const [ data, setData ] = useState({});
  
  useEffect(() => {
     setData(PostNo.datas.no);
   }, [ ]);

  return (
    <div>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          data ? (
            <div>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ data.no }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{ data.createDate }</label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label>{ data.readCount }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {data.content}
                </div>
              </div>
            </div>
          ) : ''
        }
      </div>
    </div>
  )
}

export default PostView;