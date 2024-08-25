import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import '../src/components/all-page.css'
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./pages/Home"
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( ()=> {
    
    // finding page number from url, if not found then by default 1 
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      // url mein tags hai so tag wala page display karna
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      // categories display karvanu
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      // koi ni number page display kari do
      fetchBlogPosts(Number(page));
    }
    
  }, [location.pathname, location.search]);

  return (
    <div>
      {/* <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:blogId" element={<BlogPage />}></Route>
        <Route path="/tags/:tag" element={<TagPage />}></Route>
        <Route path="/categories/:category" element={<CategoryPage />}></Route>
      </Routes>
    </div>
  );
}
