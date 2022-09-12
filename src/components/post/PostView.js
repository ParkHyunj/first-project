import React, { useEffect, useState } from 'react';
import PostNo from './data.json';
import './Post.css';
import { useParams } from "react-router-dom";

function PostView() {
  
  const [ data, setData ] = useState({});
  
  useEffect(() => {
     setData(PostNo.datas[""]);
   }, []);

   const { day } = useParams();
   const dataList = PostNo.datas.filter(data => data.no === Number(day));
   
  return (
    <div>
      { dataList.map(data => (
          <div key={data.no}>
            <label>{data.no}</label>
            <label>{data.title}</label>
          </div>
    ))}
  </div>
  );
}

export default PostView;