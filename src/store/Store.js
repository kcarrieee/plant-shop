import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/FilterSlice'

export const store = configureStore({
  reducer: {
    filter ,
  },
})