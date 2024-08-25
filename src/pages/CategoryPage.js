import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

  const navigation = useNavigate();
  const location = useLocation();

  const category = location.pathname.split("/").at(-1);

  return (
    <div className='tagPage-container'>
      <Header></Header>
      <div className='category-head-div'>
        <button onClick={() => navigation(-1)}> 
          back
        </button>
        <h2>
          Blogs On <span className='category-name'>{category}</span>
        </h2>
      </div>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}

export default CategoryPage