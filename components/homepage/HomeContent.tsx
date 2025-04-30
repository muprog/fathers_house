'use client'
import DevotionalSection from '@/components/homepage/DevotionalSection'
import HeroSection from '@/components/homepage/HeroSection'
import LinkSection from '@/components/homepage/LinkSection'
import WelcomeSection from '@/components/homepage/WelcomeSection'
import WorshipExperienceSection from '@/components/homepage/WorshipExperienceSection'
import WorshipSection from '@/components/homepage/WorshipSection'
import AppLayout from '@/components/layout/AppLayout'
import {
  YOUTUBE_API_KEY,
  YOUTUBE_UPLOAD_KEY,
} from '@/functions/environmentVariables'
import { useAppDispatch } from '@/store/hooks'
import { setVideoLoading, setVideos } from '@/store/slices/youtubeVideos'
import axios from 'axios'
import { useCallback, useEffect } from 'react'

export default function HomeContent() {
  const dispatch = useAppDispatch()

  const getYoutubeChannelVideos = useCallback(async () => {
    dispatch(setVideoLoading(true))
    try {
      // Check if YouTube API is configured
      if (!YOUTUBE_API_KEY || !YOUTUBE_UPLOAD_KEY) {
        console.warn(
          'YouTube API configuration is missing. Skipping video fetch.'
        )
        dispatch(
          setVideos({
            videos: [],
            nextPageToken: undefined,
            prevPageToken: undefined,
          })
        )
        return
      }

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems`,
        {
          params: {
            key: YOUTUBE_API_KEY,
            part: 'snippet',
            playlistId: YOUTUBE_UPLOAD_KEY,
            maxResults: 10,
          },
        }
      )

      if (!response.data?.items) {
        throw new Error('No videos found in the playlist')
      }

      dispatch(
        setVideos({
          videos: response.data.items,
          nextPageToken: response.data.nextPageToken,
          prevPageToken: response.data.prevPageToken,
        })
      )
    } catch (error) {
      console.error('Error fetching YouTube videos:', error)
      dispatch(
        setVideos({
          videos: [],
          nextPageToken: undefined,
          prevPageToken: undefined,
        })
      )
    } finally {
      dispatch(setVideoLoading(false))
    }
  }, [dispatch])

  useEffect(() => {
    getYoutubeChannelVideos()
  }, [getYoutubeChannelVideos])

  return (
    <AppLayout>
      <HeroSection />
      <WelcomeSection />
      <LinkSection />
      <DevotionalSection />
      <WorshipSection />
      <WorshipExperienceSection />
    </AppLayout>
  )
}
