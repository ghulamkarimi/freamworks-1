import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"
import { useNavigate } from "react-router-dom"
import { createApiBlog } from "../reducer/BlogSlice"


const CreateBlogPage = () => {
    
    const [title, setTitle] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const addNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const addNewImgUrl = (e: ChangeEvent<HTMLInputElement>) => {
        setImgUrl(e.target.value)
    }
    const addNewContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }
    const addNewArticle = async () => {
        try {
           await dispatch(createApiBlog({
            _id:"",
            title,
            userId:"",
            date: new Date().toISOString(),
            imgUrl,
            content,
            reactions: {
                thumbSup: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0
              }           
           }))
           setTitle("")
           setImgUrl("")
           setContent("")
           navigate("/home")
        } catch (error) { console.log(error) }
    }

    return (

        <div className=" min-h-screen flex flex-col justify-center items-center ">
            <div className=" px-5 flex container justify-center ">
                <div className="flex flex-col gap-6 items-center bg-yellow-400 p-6 rounded-lg lg:w-1/2">

                    <input
                        className="w-full py-2 bg-slate-700 px-4 text-white rounded-lg outline-0"
                        placeholder="title"
                        value={title}
                        onChange={addNewTitle}
                        type="text" />


                    <input
                        className="w-full py-2 bg-slate-700 texconst dispatch = useDispatch<AppDispatch>()
                        const navigate = useNavigate()t-white px-4 rounded-lg outline-0"
                        placeholder="image Url"
                        value={imgUrl}
                        onChange={addNewImgUrl}
                        type="text" />

                    <select
                        className="w-full py-2 bg-slate-700 text-white px-4 rounded-lg outline-0"

                        id="">

                        <option className="bg-slate-500" value="">Author</option>
                    </select>
                    <textarea
                        name=""
                        value={content}
                        onChange={addNewContent}
                        placeholder="messege"
                        className="w-full py-2 bg-slate-700 text-black px-4 rounded-lg outline-0 "
                        id=""
                        cols={30}
                        rows={10}
                    ></textarea>
                    <div className="flex gap-6">

                        <button
                            className="py-1 px-4 bg-green-500 rounded-lg"
                            onClick={addNewArticle}
                        >create Article</button>

                        <button
                            className="py-1 px-4 bg-red-500 rounded-lg"
                            onClick={() => navigate("/home")}

                        >cancle</button>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default CreateBlogPage
