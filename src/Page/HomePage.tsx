import { useDispatch } from "react-redux"
import Blogs from "../components/Blogs"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchAllBlogs, setBlogId } from "../reducer/BlogSlice"
import Blog from "../components/Blog"
import { AppDispatch } from "../store"


const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogId } = useParams();

  useEffect(() => {

    dispatch(setBlogId(blogId));
  }, [blogId, dispatch])

  useEffect(() => {

    dispatch(fetchAllBlogs());
  }, [dispatch])

  return <div>{blogId === undefined ? <Blogs /> : <Blog />}</div>;
};

export default HomePage;
