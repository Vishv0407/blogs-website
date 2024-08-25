import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {

  const navigation = useNavigate();
  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);

  return (
    <div className='tagPage-container'>
      <Header></Header>
      <div className="tag-head-div">
        <button onClick={() => navigation(-1)}> 
          back
        </button>
        <h2 className='tag-text'>
          Blogs Tagged <span className='tag-name'>#{tag}</span>
        </h2>
      </div>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}

export default TagPage