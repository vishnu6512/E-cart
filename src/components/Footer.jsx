import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div style={{ height: '250px', marginTop: '100px' }} className='mt-5 w-full bg-violet-600 text-white'>
        <div className='flex justify-between p-4'>

          <div style={{ width: '400px' }} className='intro'>
            <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E Cart</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quo accusamus non quidem aspernatur error?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Currently v 5.3.2</p>
          </div>

          {/*Links*/}
          <div className='flex flex-col gap-2 '>
            <h5>Links</h5>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'} >Home</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/cart'} >Cart</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/wishlist'} >Wishlist</Link>

          </div>

          {/* [guides] */}
        <div className='flex flex-col gap-2'>
          <h5>Guides</h5>
          <a style={{textDecoration:'none', color:'white'}} href="https://react.dev/" target='blank'>React</a>
          <a style={{textDecoration:'none', color:'white'}} href="https://tailwindui.com/" target='blank'>Tailwind</a>
          <a style={{textDecoration:'none', color:'white'}} href="https://reactrouter.com/" target='blank'>React Router</a>
        </div>


          {/* [contact] */}
          <div className='flex flex-col'>
          <h5 className='text-lg font-semibold mb-4'>Contact Us</h5>
            <div className='flex gap-2 mb-4'>
              <input 
                type="text" 
                placeholder='Enter your email' 
                className='px-3 py-2 rounded-lg flex-grow text-gray-800' 
              />
              <button className='bg-cyan-500 hover:bg-black-600 px-4 py-2 rounded-lg transition-colors'>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className='flex flex-row justify-between mt-2 gap-3'>
              <a style={{ textDecoration: 'none', color: 'white' }} href="https://x.com/" target='blank'><i class="fa-brands fa-twitter"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.facebook.com/" target='blank'><i class="fa-brands fa-facebook"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.google.com/" target='blank'><i class="fa-brands fa-google"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/" target='blank'><i class="fa-brands fa-instagram"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com" target='blank'><i class="fa-brands fa-linkedin-in"></i></a>

              <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.youtube.com/" target='blank'><i class="fa-brands fa-youtube"></i></a>

            </div>

          </div>

        </div>
        <div className='text-center'>      Copyright © 2024 Tailwind. Built with Docusaurus.
      </div>
      </div>
    </>
  )
}

export default Footer