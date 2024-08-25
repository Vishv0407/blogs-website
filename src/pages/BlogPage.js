import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Spinner from '../components/Spinner';

const BlogPage = () => {

  const [blog, setBlog] = useState();
  const [relatedBlogs, setRelatedBlogs] = useState();
  const location = useLocation();
  const navigation = useNavigate();
  
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const {loading, setLoading, baseUrl} = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try{
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(err){
      console.log("error in call of blogId", err);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if(blogId){
      fetchRelatedBlogs();
    }
  }, [location.pathname]);


  return (
    <div>
      <Header></Header>
      
      {
        loading ? (<Spinner></Spinner>) : (
          blog ? 
          (
            <div className='blogs-container'>

              <div className='back-btn-div'>
                <button onClick={() => navigation(-1)}>back</button>
              </div>

              <BlogDetails post={blog}></BlogDetails>
              <h2>Related blogs</h2>
              {
                relatedBlogs.map((post) => (
                  <div key={post.id}>
                    <BlogDetails post={post}></BlogDetails>
                  </div>
                ))
              }
            </div> 
          ) : 
          (<p>No Blog Found</p>)
        )
      }
    </div>
  )
}

export default BlogPage