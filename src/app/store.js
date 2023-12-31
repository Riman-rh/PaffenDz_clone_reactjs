import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/product/productSlice'

export default configureStore({
    reducer: {
        product: productSlice
    }
})