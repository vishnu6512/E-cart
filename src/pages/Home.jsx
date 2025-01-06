import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

  return (
    <>
        <Header insideHome={true}/>
        <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='rounded border p-2 shadow '>
                    <img width={'100%'} height={'200px'} src="https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className=''>
                        <h3 className='te4xt-xl font-bold'>Product Name</h3>
                        <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Home