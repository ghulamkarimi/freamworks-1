import { useDispatch, useSelector } from "react-redux"

import { fetchAllBlogs, displayAllBlogs } from "../reducer/BlogSlice"
import { useEffect } from "react"
import { AppDispatch, RootState } from "../store"
import SearchBox from "./SearchBox"
import Spinner from "./Spinner"
import { NavLink } from "react-router-dom"


const statusdata = {
    idle: "idle",
    loading: "loading",
    compeleted: "compeleted",
    failed: "failed"
}

const Blogs = () => {
    const inputValue = useSelector((state: RootState) => state.blog.inputvalue)
    const blogs = useSelector(displayAllBlogs).slice().sort((a, b) => b.date.localeCompare(a.date))


    const status = useSelector((state: RootState) => state.blog.status)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchAllBlogs())
    }, [dispatch])

    const renderBlogs = () => {
        switch (status) {
            case statusdata.loading:
                return <Spinner />

            case statusdata.compeleted:
                return (
                    <>
                        {
                            blogs.filter((Blog) => Blog.title && Blog.title.toLowerCase().includes(inputValue.toLowerCase()))

                                .map((blog) => (
                                    <article className="p-8 leading-9 flex flex-col gap-12 w-full mb-6 odd:bg-slate-700  even:bg-yellow-500 odd:text-white rounded-xl "
                                        key={blog._id}>

                                        <div className="flex items-center gap-10">
                                            <img className="w-16" src={blog.imgUrl} alt="" />
                                            <p>{blog.title}</p>
                                        </div>

                                        <p>{blog.content.slice(0, 210)}...</p>

                                        <NavLink
                                            to={`/blog/${blog._id}`}
                                            className="bg-green-600 w-fit px-2 py-2  uppercase rounded-xl"
                                        >show more
                                        </NavLink>

                                    </article>
                                ))
                        }

                    </>
                )
        }
    }

    return (
        <div className="px-5 py-8 flex flex-col gap-8" >

            <div className=" flex justify-center ">

                <SearchBox />
            </div>
            <p className="text-center text-xl py-6 font-bold">{`${blogs.length} Articles are currently available`}</p>
            <div className="flex flex-col justify-center items-center w-full">

                {renderBlogs()}
            </div>


        </div>
    )
}

export default Blogs
