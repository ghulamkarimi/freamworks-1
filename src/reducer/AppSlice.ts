import { createSlice } from "@reduxjs/toolkit"

export interface IAppState {
    darkMode: boolean
}

const initialState: IAppState = {
    darkMode: false
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})


export const { toggleTheme } = appSlice.actions
export default appSlice.reducer