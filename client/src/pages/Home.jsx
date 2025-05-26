import React from 'react'
import HomeImage from "../assets/Home.jpg"

const Home = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center place-content-center'>
          <div className='p-5 mx-5 my-2'>
            <p className='text-[#2E9351] text-lg font-semibold px-4'>Start Your Favourite Course</p>
            <h2 className='text-3xl sm:text-5xl font-semibold px-4 py-2 tracking-wide sm:tracking-normal mb-3'>Now Learning from anywhere, and bulid your <span className='text-[#2E9351]'>brighter career.</span></h2>
            <button className='py-3 px-3 bg-[#2E9351] text-white font-semibold rounded mx-4 my-3'>Start The Course</button>
          </div>
          <div className='p-5 mx-5 my-2'>
            <img src={HomeImage} alt="" className='w-[80%]' style={{borderRadius: "10px 100px / 120px"}}/>
          </div>
        </div>
    </div>
  )
}

export default Home