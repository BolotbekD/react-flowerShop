import { createSlice } from "@reduxjs/toolkit";

const logModalSlice = createSlice ({

    name: 'logClose',
    initialState: {
        loginClose: false
    },
    reducers: {
        setLoginClose: (state, action) => {

            state.loginClose = action.payload
        }
    }
})

export const {setLoginClose} = logModalSlice.actions;
export default logModalSlice.reducer