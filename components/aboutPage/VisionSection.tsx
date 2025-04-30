'use client'
import React from 'react'
import Image from 'next/image'

const VisionSection = () => {
  return (
    <section id='vision' className='px-primary mt-[118px]'>
      <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-[51px] font-secondary'>
        Vision and Purpose
      </h2>
      <div className='flex flex-col sm:flex-row gap-8 max-w-7xl mx-auto'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
          <div className='w-full max-w-[500px]'>
            <Image
              src='/assets/images/about/vision.webp'
              alt='vision'
              width={500}
              height={500}
              className='w-full h-auto'
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='w-full lg:w-1/2 flex flex-col gap-[56px] text-[#00050D]'>
          {/* Vision */}
          <div className='flex flex-col gap-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <p className='font-lg font-secondary font-bold uppercase text-primary'>
              Vision
            </p>
            <p className='text-2xl'>...Raising sons</p>
          </div>

          {/* Core Values */}
          <div className='flex flex-col gap-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <p className='font-lg font-secondary font-bold uppercase text-primary'>
              core values
            </p>
            <p className='text-2xl'>
              Love, Relationship, Responsibility & integrity
            </p>
          </div>

          {/* Purpose */}
          <div className='flex flex-col gap-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <p className='font-lg font-secondary font-bold uppercase text-primary'>
              our purpose
            </p>
            <p className='text-2xl'>
              Through Evangelism, we would bring people into membership. By
              edification, they would come to maturity. Shall be equipped for
              ministry through training adequately exercised for mission
              opportunities and constantly exalt the Lord for the opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
