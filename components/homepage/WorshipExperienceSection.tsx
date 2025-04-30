'use client'
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator'
import { useAppSelector } from '@/store/hooks'
import React from 'react'
import Link from 'next/link'
import Button from '@/common/Button'
import {
  YOUTUBE_API_KEY,
  YOUTUBE_UPLOAD_KEY,
} from '@/functions/environmentVariables'
import DraggableContent from './DraggableContent'

const WorshipExperienceSection = ({
  showButton = false,
}: {
  showButton?: boolean
}) => {
  const { videos, loading } = useAppSelector((state) => state.youtubeVideos)

  // Check if YouTube configuration is available
  const isYouTubeConfigured = YOUTUBE_API_KEY && YOUTUBE_UPLOAD_KEY

  return (
    <section id='worship-experience' className='px-primary py-[93px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary mb-[83px]'>
        Recent Worship Experience
      </h2>
      {!isYouTubeConfigured ? (
        <div className='text-center py-12'>
          <p className='text-lg text-gray-600 mb-4'>
            Worship videos are currently unavailable
          </p>
          <p className='text-sm text-gray-500'>
            Please check back later for our latest worship experiences
          </p>
        </div>
      ) : loading ? (
        <LoadingIndicator />
      ) : videos && videos.length > 0 ? (
        <DraggableContent videos={videos} />
      ) : (
        <div className='text-center py-12'>
          <p className='text-lg text-gray-600 mb-4'>
            No worship videos available at the moment
          </p>
          <p className='text-sm text-gray-500'>
            Please check back later for our latest worship experiences
          </p>
        </div>
      )}
      {showButton && (
        <div className='flex w-full justify-center'>
          <Link href='/messages'>
            <Button className='!w-[280px] mt-[59px]'>Recent Messages</Button>
          </Link>
        </div>
      )}
    </section>
  )
}

export default WorshipExperienceSection
