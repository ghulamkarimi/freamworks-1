import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { findBlogById, updateApiBlog } from "../reducer/BlogSlice"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"



const UpdatePage = () => {
    const blogId = useSelector((state: RootState) => state.blog.blogId)
    const blog = useSelector((state: RootState) => findBlogById(state, blogId))
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const [title, setTitle] = useState(blog?.title)
    const [imgUrl, setImgUrl] = useState(blog?.imgUrl)
    const [content, setContent] = useState(blog?.content)



    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
        setImgUrl(e.target.value)
    }
    const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }

    const canSave = [title, imgUrl, content].every(Boolean)
    const sendChange = async () => {
        if (canSave) {
            try {
                await dispatch(updateApiBlog({
                    _id: blogId,
                    userId: "",
                    date: new Date().toISOString(),
                    title: title || "",
                    imgUrl: imgUrl || "",
                    content: content || "",
                    reactions: {
                        thumbSup: 0,
                        hooray: 0,
                        heart: 0,
                        rocket: 0,
                        eyes: 0,
                    }

                }))
                setTitle(""),
                    setImgUrl(""),
                    setContent(""),
                    navigate(`/blog/${blogId}`)
            } catch (error) { console.log(error) }
        }
    }


    return (
        <div className=" min-h-screen flex flex-col justify-center items-center ">
            <div className=" px-5 flex container justify-center ">
                <div className="flex flex-col gap-6 items-center bg-yellow-400 p-6 rounded-lg lg:w-1/2">

                    <input
                        className="w-full py-2 bg-slate-700 px-4 text-white rounded-lg outline-0"
                        type="text"
                        value={title}
                        onChange={onChangeTitle}
                    />

                    <input
                        className="w-full py-2 bg-slate-700 text-white px-4 rounded-lg outline-0"
                        type="text"
                        value={imgUrl}
                        onChange={onChangeImg}
                    />

                    <select className="w-full py-2 bg-slate-700 text-white px-4 rounded-lg outline-0 " id="">

                        <option value="">Author</option>
                    </select>
                    <textarea
                        name=""
                        className="w-full py-2 bg-slate-700 text-white px-4 rounded-lg outline-0 "
                        value={content}
                        onChange={onChangeContent}
                        id=""
                        cols={30}
                        rows={10}
                    ></textarea>
                    <div className="flex gap-10">
                        <button
                            className="px-4 py-1 bg-green-500 rounded-xl"
                            onClick={sendChange}
                        >update Aricle</button>
                        <button className="px-4 py-1 bg-orange-500 rounded-xl">cancle</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdatePage
