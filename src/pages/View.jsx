import React from 'react'
import Header from '../components/Header'

const View = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col mx-5'>
                <div className='grid grid-cols-2 items-center h-screen'>
                    <img width={'450px'} height={'200px'} src="https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div>
                        <h3 className='font-bold'>PID:1</h3> 
                        <h1 className='text-5xl font-bold'> Product Name</h1>
                        <h4 className='font-bold text-red-600 text-2xl'>$250</h4>
                        <p>
                            <span className='font-bold'>Description</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, incidunt quaerat deleniti expedita repellendus tenetur cupiditate vitae eos. Dicta voluptatum atque dolore dolorum molestiae temporibus tenetur dolores autem beatae.
                            <div className='flex justify-between mt-5'>
                                <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
                                <button className='bg-green-600 text-white p-2'>Add to Cart</button>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default View