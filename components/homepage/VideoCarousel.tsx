'use client'
import React, { useState, useRef } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'
import PlayIcon from '@/assets/svgs/home/play-icon.svg'
import Image from 'next/image'

interface Video {
  id: string
  title: string
  thumbnailUrl: string
  date: string
  url: string
}

interface VideoCarouselProps {
  videos: Video[]
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const ref = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  })

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const handleFullscreen = async () => {
    if (!videoRef.current) return

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else {
        await videoRef.current.requestFullscreen()
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error)
    }
  }

  const getVideoId = (url: string) => {
    const urlParams = new URLSearchParams(new URL(url).search)
    return urlParams.get('v')
  }

  return (
    <section className='px-primary py-[60px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary mb-[40px]'>
        All Worship Videos
      </h2>
      <div
        className='flex gap-4 overflow-x-auto max-w-full no-scroll-bar pb-4'
        ref={ref}
        {...events}
        style={{ touchAction: 'pan-x' }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className='flex flex-col gap-3 w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0'
          >
            {selectedVideo === video.id ? (
              <div className='flex flex-col gap-2'>
                <div
                  ref={videoRef}
                  className='relative w-full aspect-video rounded-[12px] overflow-hidden'
                  onDoubleClick={handleFullscreen}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${getVideoId(
                      video.url
                    )}?autoplay=1`}
                    className='w-full h-full'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
                    allowFullScreen
                  />
                </div>
                <div className='flex justify-end gap-2 px-1'>
                  <button
                    onClick={handleFullscreen}
                    className='text-primary hover:text-primary/80 text-sm font-medium'
                  >
                    {document.fullscreenElement
                      ? 'Exit Fullscreen'
                      : 'Fullscreen'}
                  </button>
                  <span className='text-gray-300'>|</span>
                  <a
                    href={video.url}
                    target='_blank'
                    className='text-primary hover:text-primary/80 text-sm font-medium'
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ) : (
              <div
                onClick={() => handleVideoClick(video.id)}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${video.thumbnailUrl})`,
                }}
                className='flex items-center justify-center w-full aspect-video group bg-center bg-no-repeat bg-cover rounded-[12px] transition-transform duration-300 hover:scale-[1.02] cursor-pointer'
              >
                <Image
                  src={PlayIcon}
                  alt='Play'
                  className='group-hover:sepia duration-300 w-[50px] h-[50px] md:w-[60px] md:h-[60px]'
                />
              </div>
            )}
            <div className='px-1'>
              <p className='text-sm md:text-base font-bold text-primary mb-1 line-clamp-2'>
                {video.title}
              </p>
              <p className='text-xs md:text-sm text-gray-600'>{video.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoCarousel
