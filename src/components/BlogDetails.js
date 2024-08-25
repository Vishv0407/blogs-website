import React from 'react'
import { NavLink } from 'react-router-dom'
import "./all-page.css"

const BlogDetails = ({post}) => {
  return (
    <div key={post.id} className='blog-div'>
        <NavLink to={`blog/${post.id}`} style={{ textDecoration: 'none' }}>
            <p className='post-title'>{post.title}</p>
        </NavLink>
        

        <p className='post-a-c-data'>
        By 
        <span className='post-author'>{post.author}</span>
        On 
        <NavLink to={`categories/${post.category.replaceAll(" ","-")}`}>
            <span className='post-category'>{post.category}</span>
        </NavLink>
        </p>

        <p className='post-date'>Posted On {post.date}</p>
        <p className='post-content'>{post.content}</p>
        <div className='post-tags'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span>{`#${tag}`}</span>
            </NavLink>  
        ))}
        </div>  
    </div>
  )
}

export default BlogDetails