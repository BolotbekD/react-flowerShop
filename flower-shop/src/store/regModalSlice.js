import { createSlice } from "@reduxjs/toolkit";


const regCloseSlice = createSlice({
    name: 'registrationClose',
    initialState: {
        registrationClose: false
    },
    reducers: {
        setRegistrationClose: (state, action) => {
            state.registrationClose = action.payload;
        }
    }
});

export const { setRegistrationClose } = regCloseSlice.actions;
export default regCloseSlice.reducer;       