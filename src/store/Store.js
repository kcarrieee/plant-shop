import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/FilterSlice'
import cart from './slices/CartSlice'

export const store = configureStore({
  reducer: {
    filter,
    cart
  },
})