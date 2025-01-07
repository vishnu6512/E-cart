import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// action return a promise
export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const result=await axios.get('https://dummyjson.com/products')
    // console.log(result)
    sessionStorage.setItem('allproducts',JSON.stringify(result.data.products))
    return result.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        loading:false,
        errorMsg:''
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.loading=false
            state.errorMsg=''
        } )
        builder.addCase(fetchProducts.pending,(state,apiResult)=>{
            state.allProducts=[]
            state.loading=true
            state.errorMsg=''
        } )
        builder.addCase(fetchProducts.rejected,(state,apiResult)=>{
            state.allProducts=[]
            state.loading=false
            state.errorMsg='api call failed'
        } )
    }
})

export default productSlice.reducer