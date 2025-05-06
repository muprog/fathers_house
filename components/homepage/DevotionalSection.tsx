'use client'
import React, { useEffect, useState } from 'react'
import DevotionalImage from '@/assets/images/home/slider/two.jpg'
import Image from 'next/image'
import { DevotionalType } from '@/types/types'
import { appAxios } from '@/api/axios'
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator'
import Button from '@/common/Button'
import { AxiosError } from 'axios'
import { API_URL } from '@/functions/environmentVariables'

const DevotionalSection = () => {
  const [devotional, setDevotional] = useState<DevotionalType | undefined>(
    undefined
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getDevotional = async () => {
      try {
        setLoading(true)
        setError(null)

        // Check if API is configured
        if (!API_URL) {
          setError('Service temporarily unavailable')
          setDevotional(undefined)
          return
        }

        const response = await appAxios.get('/devotional/today')

        if (!response.data?.devotional) {
          setError('No devotional available for today')
          setDevotional(undefined)
          return
        }

        setDevotional(response.data.devotional)
      } catch (error) {
        console.error('Error fetching devotional:', error)

        // Handle different types of errors
        if (error instanceof AxiosError) {
          if (error.response?.status === 404) {
            setError('No devotional available for today')
          } else {
            setError("Unable to load today's devotional")
          }
        } else {
          setError("Unable to load today's devotional")
        }

        setDevotional(undefined)
      } finally {
        setLoading(false)
      }
    }
    getDevotional()
  }, [])

  return (
    <section
      id='devotional'
      className='px-primary py-[100px] lg:py-[148px] devotional-bg'
    >
      <div className='flex items-center justify-center text-center lg:text-start gap-[50px] lg:gap-[81px] flex-wrap lg:flex-nowrap'>
        <Image src={DevotionalImage} alt='Devotional' />
        <div className='items-center flex flex-col lg:items-start'>
          {loading ? (
            <LoadingIndicator />
          ) : error ? (
            <div className='text-white text-center'>
              <p className='text-lg mb-4'>{error}</p>
              <p className='text-sm text-gray-300'>Please check back later</p>
            </div>
          ) : devotional ? (
            <>
              <h2 className='text-white text-[35px] md:text-[48px] lg:text-[60px] font-bold mb-3'>
                The Father&apos;s Menu
              </h2>
              <p className='text-secondary font-bold text-lg lg:text-2xl mb-4'>
                {new Date(devotional.ditto).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className='text-white font-normal lg:text-xl max-w-[672px]'>
                {devotional.scripture1}
              </p>
              <p className='text-white font-normal mb-[34px] lg:text-xl'>
                - {devotional.scripture2}
              </p>
              <Button className='!w-[280px] !max-w-full'>
                Read Devotional
              </Button>
            </>
          ) : (
            <div className='text-white text-center'>
              <p className='text-lg mb-4'>No devotional available</p>
              <p className='text-sm text-gray-300'>Please check back later</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default DevotionalSection
