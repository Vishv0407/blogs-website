import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}) {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    async function fetchBlogPosts(page = 1, tag=null, category=null){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`; 

        if(tag)
            url += `&tag=${tag}`;

        if(category)
            url += `&category=${category}`;

        console.log(url);
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setCurrentPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(err){
            console.log("error aaya bhai", err);
            setCurrentPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigate( {search: `?page=${page}`});
        setCurrentPage(page);
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
        fetchBlogPosts,
        handlePageChange,
        baseUrl
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}