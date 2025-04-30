'use client'
import React from 'react'
import { pastorData } from './data'
import PastorCard from './PastorCard'

const PastorsSection = () => {
  return (
    <section id='pastors' className='px-primary py-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-8 font-secondary'>
          Meet Our Pastors
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4'>
          {pastorData.map((data) => (
            <PastorCard key={data.name} data={data} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastorsSection
