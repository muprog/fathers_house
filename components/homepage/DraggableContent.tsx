'use client'
import React from 'react'
import { useDraggable } from 'react-use-draggable-scroll'
import PlayIcon from '@/assets/svgs/home/play-icon.svg'
import Image from 'next/image'
import { getYoutubeLink } from '@/functions/stringManipulations'
import { YoutubeVideoType } from '@/types/types'

interface DraggableContentProps {
  videos: YoutubeVideoType[]
}

const DraggableContent = ({ videos }: DraggableContentProps) => {
  const ref = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  })

  return (
    <div
      className='flex gap-10 overflow-x-auto max-w-full no-scroll-bar'
      ref={ref}
      {...events}
      style={{ touchAction: 'pan-x' }}
    >
      {videos.map((video) => (
        <div
          key={video.id}
          className='flex flex-col gap-[25px] text-center md:text-left max-w-screen-sm w-full md:min-w-[509px] md:max-w-[509px]'
        >
          <a
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${video.snippet.thumbnails.standard?.url})`,
            }}
            href={getYoutubeLink(video.snippet.resourceId.videoId)}
            target='_blank'
            className='flex items-center justify-center w-full h-[316px] max-h-screen group bg-center bg-no-repeat bg-cover rounded-[20px]'
          >
            <Image
              src={PlayIcon}
              alt='Play'
              className='group-hover:sepia duration-300'
              width={95}
              height={95}
            />
          </a>
          <div className=''>
            <p className='text-lg lg:text-[26px] font-bold text-primary mb-[10px] truncate'>
              {video.snippet.title}
            </p>
            <p className='lg:text-xl font-medium'>
              {new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DraggableContent
