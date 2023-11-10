import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBlog } from "../interface";
import { createBlog, deleteBlog, getAllBlogs, updateBlog } from "../services";
import { RootState } from "../store";


export interface IBlogState {
    blogs: IBlog[],
    status: 'idle' | 'loading' | 'compeleted' | 'failed',
    error: string | null,
    inputvalue: string,
    blogId: string

}

export const fetchAllBlogs = createAsyncThunk("/blog/FetchAllBlogs", async () => {
    const response = await getAllBlogs()
    return response.data
})

export const updateApiBlog = createAsyncThunk("/blog/updateApiBlog", async (blog: IBlog) => {
    const response = await updateBlog(blog, blog._id)
    return response.data
})

export const deleteApiBlog = createAsyncThunk("/blog/deleteApiBlog", async (blogId: string) => {
    await deleteBlog(blogId)
    return blogId
})

export const createApiBlog = createAsyncThunk("/blog/createApiBlog", async (blog: IBlog) => {
    const response = await createBlog(blog);
    return response.data
})


const initialState: IBlogState = {
    blogs: [],
    status: 'idle',
    error: null,
    inputvalue: "",
    blogId: ""
}


const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            state.inputvalue = action.payload
        },
        setBlogId: (state, action) => {
            state.blogId = action.payload
        }
    },
    extraReducers: (builder) => {

        builder

            .addCase(fetchAllBlogs.pending, (state) => {
                state.status = "loading";

            }).addCase(fetchAllBlogs.fulfilled, (state, action) => {
                state.status = "compeleted";
                state.blogs = action.payload;

            }).addCase(fetchAllBlogs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "somthing went wornt"

            }).addCase(createApiBlog.fulfilled, (state, action) => {
                state.status = "compeleted";
                state.blogs.push(action.payload)

            }).addCase(updateApiBlog.fulfilled, (state, action) => {
                state.status = "compeleted";
                const { id } = action.payload;
                const index = state.blogs.findIndex((blog) => blog._id === id)
                state.blogs[index] = action.payload;

                // }).addCase(updateApiBlog.fulfilled, (state, action: PayloadAction<IBlog["_id"]>) => {
                //     state.status = "compeleted"
                //     const index = state.blogs.findIndex((a) => a._id === action.payload);
                //     state.blogs.splice(0, index);

            }).addCase(deleteApiBlog.fulfilled, (state, action) => {
                state.status = "compeleted";
                state.blogs = state.blogs.filter(
                    (blog) => blog._id !== action.payload
                )
            })
        // .addCase(deleteApiBlog.fulfilled, (state, action: PayloadAction<IBlog["_id"]>) => {
        //     state.status = "compeleted"
        //     const index = state.blogs.findIndex((b) => {
        //         b._id === action.payload
        //         state.blogs.splice(index, 1)
        //     })
        // })
    },
})

export const displayAllBlogs = (state: RootState) => state.blog.blogs

export const findBlogById = (state: RootState, blogId: string) =>
    state.blog.blogs.find((b) => b._id === blogId)

export const { setInputValue, setBlogId } = blogSlice.actions;
export default blogSlice.reducer