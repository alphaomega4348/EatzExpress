import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:["burger","pizza"]
    },
    reducers:{
        addtems:(state,action)=>{
            state.items.push(action.payload)
        },
        removetems:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})

export const{addtems,removetems,clearCart}=cartSlice.actions

export default cartSlice.reducer