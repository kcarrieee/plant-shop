import { createSlice } from '@reduxjs/toolkit'
import { find } from 'lodash'

const initialState = {
  totalPrice: 0,
  items:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action){
        const findItem = state.items.find(obj => obj.id === action.payload.id)

        if(findItem){
          findItem.count++
        }else{
          state.items.push({
          ...action.payload,
          count: 1,
        })
        }
        state.totalPrice = state.items.reduce((acc, curr) => ( (curr.price * curr.count) + acc ), 0)
    },
    removeProduct(state, action){
        state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    decrementProduct(state, action){
         const findItem = state.items.find(obj => obj.id === action.payload)
        if(findItem){
          findItem.count--
          if (findItem.count <= 0) {
            findItem.count= 0 
          }else{
            findItem.count--
          }

        }
    },
    clearCart(state){
        state.items = []
        state.totalPrice = 0
    },
  },
})

export const { addProduct, removeProduct, clearCart, decrementProduct } = cartSlice.actions

export default cartSlice.reducer