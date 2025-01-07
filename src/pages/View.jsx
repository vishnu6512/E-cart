import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const View = () => {

    const [product, setProduct] = useState([])
    const { id } = useParams()
    console.log(id);
    console.log(product);

    const { allProducts } = useSelector(state => state.productReducer)
    console.log(allProducts);

    useEffect(() => {
        if (sessionStorage.getItem('allproducts')) {
            const allproducts = JSON.parse(sessionStorage.getItem('allproducts'))
            // console.log(allproducts.find(item=>item.id==id));
            setProduct(allproducts.find(item => item.id == id))
        }

    }, [])

    return (
        <>
            <Header />
            <div className='flex flex-col mx-5'>
                <div style={{ marginTop: '100px' }} className='grid grid-cols-2 items-center h-screen '>
                    <div>
                        <img width={'450px'} height={'200px'} src={product?.thumbnail} alt="" />
                        <div className='flex justify-between mt-5'>
                            <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
                            <button className='bg-green-600 text-white p-2'>Add to Cart</button>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold'>PID:{product?.id}</h3>
                        <h1 className='text-5xl font-bold'> {product?.title}</h1>
                        <h4 className='font-bold text-red-600 text-2xl'>${product?.price}</h4>
                        <h6 className='font-bold text-black-600 text-xl'><span style={{ fontWeight: 'lighter', fontSize: '15px' }}>Sold by</span> {product?.brand} </h6>
                        <h6 className='font-bold text-black-600 '> Category:{product?.category} </h6>
                        <p>
                            <span className='font-bold'>Description</span> {product?.description}

                        </p>
                        <h3 className='font-bold text-black-600 text-xl mt-8 mb-4'>Client Reviews</h3>
                        {
                            product?.reviews?.length > 0 ?
                                product?.reviews?.map((item) => (
                                    <div key={item?.date} className="bg-gray-50 p-4 rounded-lg mb-3 shadow-sm">
                                        <div className="flex items-center gap-2 mb-2">

                                            <h4 className='font-semibold text-gray-800'>{item?.reviewerName}</h4>
                                            <div className="flex items-center ml-auto">
                                                {Array.from({ length: 5 }, (_, i) => (
                                                    <span key={i} className={`text-xl ${i < item?.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className='text-gray-600'>{item?.comment}</p>
                                    </div>
                                ))
                                :
                                <div className="text-gray-500 italic bg-gray-50 p-4 rounded-lg">
                                    No reviews yet
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default View