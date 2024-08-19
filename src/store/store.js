import { configureStore } from '@reduxjs/toolkit'
import regModalSlice from './regModalSlice'
import logModalSlice from './logModalSlice'
import userSlice from './userSlice'
import flowersSlice from './flowersSlice'
import oneProductSlice from './oneProductSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    regSlice: regModalSlice,
    logSlice: logModalSlice,
    userSlice,
    flowersSlice,
    productSlice: oneProductSlice,
    cartSlice
  }
})

