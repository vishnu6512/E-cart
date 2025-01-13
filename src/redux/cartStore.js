import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import WishlistSice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

const cartStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:WishlistSice,
        cartReducer:cartSlice
    }
})

export default cartStore