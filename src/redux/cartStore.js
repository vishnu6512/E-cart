import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import WishlistSice from "./slices/wishlistSlice";


const cartStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:WishlistSice    
    }
})

export default cartStore