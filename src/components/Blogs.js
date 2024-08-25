import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import './all-page.css'
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const {posts, loading} = useContext(AppContext);

  return (
    <div className='blogs-container'>
      {
        loading ? 
        (<Spinner></Spinner>) : 
        (
          posts.length === 0 ?
          (
            <div className='not-found-container'>
              <p>Not Post Found</p>
            </div>
          ) :
          (
            posts.map( (post) =>(
              <BlogDetails key={post.id} post={post}></BlogDetails>
            ))
          )
        )
      } 
    </div>
  )
}

export default Blogs
