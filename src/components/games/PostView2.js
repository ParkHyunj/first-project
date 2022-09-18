import React, { useEffect, useState } from 'react';
import PostNo from './data2.json';
import '../post/PostView.css';
import { useNavigate } from 'react-router-dom';

function PostView2() {
  
  const [ data, setData ] = useState({});
  const [ postNum, setpostNum ] = useState(0);

  useEffect(() => {
    var pathName = window.location.pathname;
    setpostNum(pathName.substr(-1));
    setData(PostNo.datas[postNum-1]);
  }, [ ]);

  useEffect(() => {
    if (postNum !==0)(
      setData(PostNo.datas[postNum-1])
    )
  }, [postNum]);

  const navigate = useNavigate();

  return (
    <div>
      <h2 align="center">게임 게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          data ? (
        <>
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
              { data.content } 
            </div>
          </div>
        </>
            ) : '해당 게시글을 찾을 수 없습니다.'
        }
          <button 
            className="post-view-go-list-btn"
            onClick={() => navigate(-1)}>
              목록으로 돌아가기
          </button>
        </div>
    </div>
  );
}

export default PostView2;