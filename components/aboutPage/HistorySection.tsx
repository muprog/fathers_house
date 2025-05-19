import React from 'react'

const HistorySection = () => {
  return (
    <section id='history' className='px-primary mt-[107px] py-12'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-10 font-secondary'>
          Our History
        </h2>
        <div className='flex flex-col gap-8 md:text-lg w-full bg-white p-8 rounded-lg shadow-md'>
          <p className='leading-relaxed'>
            The Shalom Mission Center Christian Church is based on the word of
            God, reaching the Gospel of Christ to all people, unchanged in the
            rapidly changing world. Our missionary vision and purpose is to
            spread the kingdom of God, fully realizing our potential for the
            great mission the Lord gave to the Christian Church (Matt. 28:18-20,
            Mark 16:15-20, Acts 1:8).
          </p>
          <p className='leading-relaxed'>
            This church has clearly set out its vision, goals, and values as
            well as its rules of conduct to fulfill all the trust it has taken
            to spread the kingdom of God with the previous Pentecostal churches.
          </p>
          <div className='mt-8 p-6 bg-gray-50 rounded-lg'>
            <h3 className='text-xl font-bold text-primary mb-4'>
              Church Location
            </h3>
            <p className='mb-2'>4621 Marconbe Way NE</p>
            <p className='mb-2'>Calgary, AB T2A 3G6</p>
            <p>Phone: (403) 402-8362</p>
          </div>
          <div className='mt-4 p-6 bg-gray-50 rounded-lg'>
            <h3 className='text-xl font-bold text-primary mb-4'>Founders</h3>
            <p>
              Father of the Vision: Ajab Berhanu Sultesa and Ayinalem Kebede
              Gondel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistorySection
