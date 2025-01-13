import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({ insideHome }) => {

    const dispatch=useDispatch()
    const userCart=useSelector(state=>state.cartReducer)
    const userWishlist=useSelector(state=>state.wishlistReducer)
    return (
        <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
            <Link className='text-2xl font-bold' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i>E Cart</Link>
            <ul className='flex-1 text-right'>
                { insideHome &&
                    <li className='list-none inline-block px-5'>
                        <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{ width: '300px' }} className='rounded p-2 text-black' placeholder='Search products here...' type="text" />
                    </li>
                }
                <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i className='fa-solid fa-heart text-red-600'></i>Wishlist <span className='bg-black text-white rounded p-1'> {userWishlist?.length}</span></Link>
                </li>
            <li className='list-none inline-block px-5'><Link to={'./cart'}><i className='fa-solid fa-heart text-green-600'></i>Cart <span   className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link>
                </li>

            </ul>
        </nav>
    )
}

export default Header