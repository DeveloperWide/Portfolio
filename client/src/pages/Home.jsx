import React from 'react'
import HomeImage from "../assets/Home.jpg"
import ServicesComponent from '../components/ServicesComponent';
import PricingCard from '../components/PricingCard';
// MUI Icons
import {
  AccessTime,
  Group,
  LaptopMac,
  Explore,
  Assignment,
  RocketLaunch
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center place-content-center'>
        <div className='p-5 mx-5 my-2'>
          <p className='text-[#2E9351] text-lg font-semibold px-4'>Start Your Favourite Course</p>
          <h2 className='text-3xl sm:text-5xl font-semibold px-4 py-2 tracking-wide sm:tracking-normal mb-3'>Now Learning from anywhere, and bulid your <span className='text-[#2E9351]'>brighter career.</span></h2>
          <button className='py-3 px-3 bg-[#2E9351] text-white font-semibold rounded mx-4 my-3'>Start The Course</button>
        </div>
        <div className='p-5 mx-5 my-2'>
          <img src={HomeImage} alt="" className='w-[80%]' style={{ borderRadius: "10px 100px / 120px" }} />
        </div>
      </div>
      <br />
      <br />

      {/* Services Sections */}
      <div>
        <h2 className='text-3xl text-center tracking-none font-semibold sm:text-5xl p-4 ms-8 sm:tracking-wide mx-6 sm:leading-18'>Services to <span className='font-bold text-green-800'>Grow Your Skills.</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center px-4 py-10">
        <ServicesComponent
          title="1:1 Clarity Call"
          description="60-minute session to get clarity on your dev journey, stuck points, or project guidance."
          icon={AccessTime}
        />
        <ServicesComponent
          title="Personal Dev Coaching"
          description="Weekly or monthly mentorship to improve your skills, build projects, and stay consistent."
          icon={LaptopMac}
        />
        <ServicesComponent
          title="Pair Programming"
          description="Work live with me on real projects, debug together, and build your portfolio faster."
          icon={Group}
        />
      </div>
      <Link to='/services' className=' px-3 text-end me-20 text-blue-500 font-semibold rounded mx-4 pb-3.5 mb-3.5'>See More</Link>
      
      {/* Pricing Cards Section */}
      <div>
        <h2 className='text-3xl tracking-none font-semibold sm:text-5xl p-4 ms-8 sm:tracking-wide mx-6 sm:leading-18'>Affordable <span className='font-bold text-green-800'>Pricing.</span></h2>
      </div>
      <div className="w-full px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* Highlighted Mid Card - Most Popular */}
            <PricingCard
              type="Standard"
              title="Personal Dev Coaching"
              description={[
                "Weekly check-ins",
                "Project tracking",
                "Code reviews + progress map",
              ]}
              price={2999}
              isPopular={true}
            />
      
            {/* Pair Programming */}
            <PricingCard
              type="Pro"
              title="Pair Programming"
              description={[
                "Live coding sessions",
                "Build & debug together",
                "Work on real projects",
              ]}
              price={1999}
            />
      
            {/* Career Roadmap */}
            <PricingCard
              type="Plus"
              title="Career Roadmap Session"
              description={[
                "Custom roadmap (MERN, Freelance, etc.)",
                "Tech stack strategy",
                "Actionable milestones",
              ]}
              price={1499}
            />
        </div>
      <Link to='/pricing' className=' px-3 text-end me-20 text-blue-500 font-semibold rounded mx-4 pb-3.5 mb-3.5'>Know More</Link>

    </div>
  )
}

export default Home;