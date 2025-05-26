import React from 'react'
import ServicesComponentTab from '../components/ServicesComponentTab';

const Services = () => {
  return (
    <div>
      <div>
        <h2 className='text-3xl tracking-wide font-semibold sm:text-5xl md:text-6xl p-4 ms-8 sm:tracking-wide mx-6 sm:leading-18'>Services We Provide to <br /> <span className='font-bold text-green-800'>Grow Your Skills.</span></h2>
      </div>
      <ServicesComponentTab />
    </div>
  )
}

export default Services