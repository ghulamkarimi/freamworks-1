import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface"
import { getAllUser } from "../services";
import { RootState } from "../store";

export interface IUserState {
    user: IUser[];
    status: "idle" | "loading" | "compeleted" | "failed";
    error: string | null;
}

export const fetchAlluser = createAsyncThunk("user/fetchAllUser", async () => {
    const respomse = await getAllUser();
    return respomse.data
})



const initialState: IUserState = {
    user: [],
    status: "idle",
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlluser.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchAlluser.fulfilled, (state, action) => {
                state.status = "compeleted";
                state.user = action.payload;
            })
            .addCase(fetchAlluser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "somthing went wrong"
            })
    }
})

export const displayAllUser = (state: RootState) => state.users.user

export default userSlice.reducer