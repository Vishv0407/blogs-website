import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import '../components/all-page.css'

export default function Home() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( ()=> {
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}
