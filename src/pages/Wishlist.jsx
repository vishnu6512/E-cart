import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
const Wishlist = () => {
    
    const dispatch=useDispatch()
    const userCart=useSelector(state=>state.cartReducer)
    const userWishlist = useSelector(state => state.wishlistReducer)

    const handleCart=(product)=>{
        dispatch(removeItem(product?.id))
        dispatch(addToCart(product))
        const existingProduct= userCart?.find(item=>item?.id==product?.id)
        if(existingProduct){
            alert('Quantity increased')
        }else{
            alert('Product added to cart')
        }
    }
    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5'>
                {
                    userWishlist?.length > 0 ?

                        <>
                            <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    userWishlist?.map(product => (
                                        <div className='rounded border p-2 shadow '>
                                            <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                                            <div className=''>
                                                <h3 className='te4xt-xl font-bold'>{product?.title}</h3>
                                                <div className='flex justify-evenly mt-3'>
                                                    <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                                                    <button onClick={()=>handleCart(product)} className='text-xl'><i class="fa-solid fa-cart-plus text-green-600"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                        :
                        <div className='flex flex-col items-center justify-center h-screen'>
                            <h1 className='text-4xl font-bold text-red-600'>No products in wishlist</h1>
                        </div>
                }

            </div>
        </>

    )
}

export default Wishlist