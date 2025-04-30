'use client'
import React from 'react'
import { PastorType } from './data'
import Image from 'next/image'

const PastorCard = ({ data }: { data: PastorType }) => {
  return (
    <div className='h-[450px] w-full rounded-[10px] relative group shadow-md hover:shadow-xl transition-shadow duration-300'>
      {/* Gradient */}
      <div
        className='invisible absolute top-0 left-0 right-0 bottom-0 rounded-[10px] z-10 duration-500 group-hover:visible'
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 48.22%, rgba(0, 0, 0, 0.80) 74.89%)',
        }}
      />

      {/* Image */}
      <div className='absolute top-0 left-0 right-0 bottom-0 rounded-[10px] overflow-hidden'>
        <Image
          src={data.image}
          alt='Pastor'
          width={500}
          height={500}
          className='w-full h-full object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      {/* Info */}
      <div className='invisible group-hover:visible flex flex-col absolute top-0 left-0 right-0 bottom-0 rounded-[10px] gap-2 justify-end px-6 pb-6 duration-500 z-20'>
        <p className='text-white uppercase font-secondary text-2xl font-semibold'>
          {data.name}
        </p>
        <p className='text-secondary text-lg'>{data.title}</p>
      </div>
    </div>
  )
}

export default PastorCard
