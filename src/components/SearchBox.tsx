import { RiFindReplaceLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { setInputValue } from "../reducer/BlogSlice"
import React from "react"

const SearchBox = () => {

    const dispatch = useDispatch()
    const inputValue = useSelector((state: RootState) => state.blog.inputvalue)

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputValue(event.target.value))
    }
    return (
        <div className="bg-slate-500 flex my-8 px-4 py-3 items-center gap-4 rounded-xl text-white">
            <input className="bg-transparent outline-0 placeholder:text-slate-300 "
                type="text"
                value={inputValue}
                onChange={onChangeInput}
                placeholder="search hier ..." />

            <span className="h-full text-white text-xl gap-2">
                <RiFindReplaceLine />
            </span>
        </div>
    )
}

export default SearchBox
