import { configureStore } from "@reduxjs/toolkit";
import blogReducer, { fetchAllBlogs } from "../reducer/BlogSlice";
import appReducer from "../reducer/AppSlice";
import userReducer, { fetchAlluser } from "../reducer/UserSlice";

const store = configureStore({
    reducer: {
        blog: blogReducer,
        app: appReducer,
        users: userReducer
    }
})

store.dispatch(fetchAllBlogs());
store.dispatch(fetchAlluser())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store