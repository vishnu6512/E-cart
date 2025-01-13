import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { OrbitProgress } from 'react-loading-indicators'
import { useState } from 'react'
const Home = () => {

    const dispatch = useDispatch()
    const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)

    const [currentPage,setCurrentPage]=useState(1)
    const productPerPage=8
    const totalPages=Math.ceil(allProducts.length/productPerPage)
    const currentPageProductsLastIndex=currentPage*productPerPage
    const currentPageProductsFirstIndex=currentPageProductsLastIndex-productPerPage
    const visibleProducts=allProducts?.slice(currentPageProductsFirstIndex,currentPageProductsLastIndex)
    
    console.log(allProducts, loading, errorMsg);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const navigateToNextPage=()=>{
        if(currentPage!==totalPages){
            setCurrentPage(currentPage+1)
        }
    }

    const navigateToPrevPage=()=>{
        if(currentPage!==1){
            setCurrentPage(currentPage-1)
        }
    }

    return (
        <>
            <Header insideHome={true} />
            <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
                {
                    loading ?
                        <div className='flex justify-center items-center'>
                            <OrbitProgress dense color="#de0dc7" size="medium" text="" textColor="" />
                        </div>
                        :
                        <>
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    allProducts?.length > 0 ?
                                        visibleProducts?.map(product => (
                                            <div key={product?.id} className='rounded border p-2 shadow '>
                                                <img width={'100%'} height={'100%'} src={product?.thumbnail} alt="" />
                                                <div className=''>
                                                    <h3 className='te4xt-xl font-bold'>{product?.title}</h3>
                                                    <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
                                                </div>
                                            </div>
                                        ))

                                        :
                                        <div className='flex justify-center items-center font-bold text-red-600 lg'>
                                            <h1>Products not found</h1>
                                        </div>
                                }

                            </div>
                            <div className='text-2xl text-center font-bold mt-20'>
                                <span className='cursor-pointer' onClick={navigateToPrevPage}><i className='fa-solid fa-backward me-5'></i></span>
                                <span className='cursor-pointer'>{currentPage}of {totalPages}</span>
                                <span className='cursor-pointer' onClick={navigateToNextPage}><i className='fa-solid fa-forward ms-5'></i></span>

                            </div>
                        </>

                }
            </div>

        </>
    )
}

export default Home