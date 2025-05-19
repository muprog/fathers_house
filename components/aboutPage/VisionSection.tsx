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
              src='/assets/images/about/three.jpg'
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
            <p className='font-lg font-secondary font-bold uppercase text-primary mb-4'>
              Vision
            </p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                To see who are converted to the gospel of the Lord Jesus Christ
                at home and abroad and sanctified by the Holy Spirit.
              </li>
              <li>
                To see the Christian church planted and grown to spread the
                kingdom of God at home and abroad.
              </li>
              <li>
                To provide support to orphans at home and abroad who do not
                attend school and to get them into school, as well as to help
                poor families to see their lives improved and independent.
              </li>
              <li>
                To see students who benefit the country and the church by
                establishing quality comprehensive schools at home and abroad.
              </li>
            </ul>
          </div>

          {/* Purposes */}
          <div className='flex flex-col gap-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <p className='font-lg font-secondary font-bold uppercase text-primary mb-4'>
              Purposes
            </p>
            <ul className='list-decimal pl-5 space-y-2'>
              <li>
                Preaching the Gospel of Our Lord Jesus Christ (Mark 16:15).
              </li>
              <li>
                Disciple those who believe in the Gospel who are baptized in the
                Holy Spirit (Matt 28:19).
              </li>
              <li>
                Performing the work that enables holistic service (James
                1:26-27).
              </li>
              <li>
                Maintain the foundation of faith and unity of the Church (Eph
                4:3).
              </li>
            </ul>
          </div>

          {/* Core Values */}
          <div className='flex flex-col gap-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <p className='font-lg font-secondary font-bold uppercase text-primary mb-4'>
              Core Values
            </p>
            <ul className='list-decimal pl-5 space-y-2'>
              <li>
                <strong>Love:</strong> God is love and everything done without
                true love is in vain. We believe all believers should have love
                for God, friends, and even those who hate Him.
              </li>
              <li>
                <strong>Unity:</strong> Without unity of spirit and heart, all
                worship and ministry is fruitless. We believe in and teach the
                unity of believers.
              </li>
              <li>
                <strong>Holiness:</strong> Holiness is a sign of our separation
                to God. Without holiness, it is impossible to see and please
                God.
              </li>
              <li>
                <strong>Holistic Service:</strong> Serving to meet human body,
                social, and spiritual needs.
              </li>
              <li>
                <strong>Pentecostalism:</strong> We accept that the first and
                most obvious sign of baptism in the Holy Spirit is speaking in
                new tongues.
              </li>
              <li>
                <strong>Mutual Help:</strong> We believe in relation with other
                communities and spread the Gospel of Christ by sharing and
                supporting each other.
              </li>
              <li>
                <strong>Fasting and Praying:</strong> We place great value on
                fasting and praying as essential spiritual disciplines.
              </li>
              <li>
                <strong>Transparency:</strong> We believe every action in the
                church should be revealed and open.
              </li>
              <li>
                <strong>Servant hood:</strong> We believe every member should
                have a heart of servant, following Christ's example.
              </li>
              <li>
                <strong>Honesty:</strong> We believe in biblical honesty, right
                attitudes, and Christian ethics.
              </li>
              <li>
                <strong>Accountability:</strong> We manifest responsibility
                through quality work and communication at all levels.
              </li>
              <li>
                <strong>Righteousness and Justice:</strong> We work for
                righteousness and justice to prevail for all mankind.
              </li>
              <li>
                <strong>Believing in Christ:</strong> We believe that Jesus
                Christ is the Savior of the world.
              </li>
              <li>
                <strong>Proper Biblical Teaching:</strong> Our teaching is based
                only on the inspired writings of God.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
