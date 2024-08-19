import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data:[],
    filter:'All Products',
    loading:null,
    viewAll: false
}

const flowerSlice = createSlice({
    name: "flowers",
    initialState,
    reducers: {
        getAllFlowers: (state, action) => {
            state.data = action.payload           
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        toggleViewAll(state) {
            state.viewAll = !state.viewAll;
        } 
    },
})

export const {getAllFlowers, toggleViewAll, setFilter} = flowerSlice.actions
export default flowerSlice.reducer