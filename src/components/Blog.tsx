import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { deleteApiBlog, findBlogById } from "../reducer/BlogSlice";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const blogId = useSelector((state: RootState) => state.blog.blogId)
    const blog = useSelector((state: RootState) => findBlogById(state, blogId))
     
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()


    const deleteArticle =  () => {
        try {
            dispatch(deleteApiBlog(blogId))
            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }


    if (blog) {

        return (
            <article className=" bg-yellow-500 rounded-xl flex flex-col px-6 py-8 leading-9 ">
                <div className="flex items-center">
                    <img className="w-16 h-16 " src={blog.imgUrl} alt="" />
                    <p>{blog.title}</p>
                </div>
                <p className="py-10">{blog.content}</p>

                <div className="text-center">
                    <button
                        onClick={deleteArticle}
                        className="px-6 py-1 bg-red-500 rounded-xl mx-4 uppercase text-l font-bold"

                    >delete</button>

                    <button
                        className="px-6 py-1 bg-orange-500 rounded-xl mx-4 uppercase text-l font-bold"
                        onClick={()=>navigate("/update-blog")}
                    >edit</button>

                    <button
                        className="px-6 py-1 bg-green-500 rounded-xl mx-4 uppercase text-l font-bold"
                        onClick={() => navigate("/home")}
                    >back</button>

                </div>
            </article>
        );
    } else {
        return <div>not found</div>
    }
}

export default Blog;