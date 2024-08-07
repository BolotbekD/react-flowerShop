import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cartSlise = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action) => {
            let idx = state.cart.findIndex((el) => {
                return el.id === action.payload.id
            })
            if (idx >= 0) {
                state.cart = state.cart.map((el)=>{
                    if (el.id === action.payload.id){
                        return {...el, count:el.count+1}
                    }else {
                        return el
                    }
                })
            } else {
                state.cart = [...state.cart, action.payload]
            }
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter((el) => {
               return el.id !== action.payload.id
            })
            
        },

        updateCart: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.cart[index] = action.payload;
            }
        }
    }
})

export const {addToCart, removeCart, updateCart} = cartSlise.actions
export default cartSlise.reducer