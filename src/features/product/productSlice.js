import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
    name:'product',
    initialState:{
        add: false,
        err: false
    
    }, 
    reducers:{
        updateAdd: state =>{
            state.add = !state.add
        },
        showErr: state =>{
            state.err = ! state.err
        }
    }

})
export const {updateAdd, showErr} = productSlice.actions
export const getadded = (state)=> state.product.add
export const geterr = (state)=> state.product.err

export default productSlice.reducer