import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser:(state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
        }
    }
})
export const {registerUser, logOut} = userSlice.actions
export default userSlice.reducer