'use client'
import DevotionalSection from '@/components/homepage/DevotionalSection'
import HeroSection from '@/components/homepage/HeroSection'
import LinkSection from '@/components/homepage/LinkSection'
import WelcomeSection from '@/components/homepage/WelcomeSection'
import WorshipExperienceSection from '@/components/homepage/WorshipExperienceSection'
import WorshipSection from '@/components/homepage/WorshipSection'
import VideoCarousel from '@/components/homepage/VideoCarousel'
import { videos } from '@/components/homepage/videoData'
import AppLayout from '@/components/layout/AppLayout'

export default function HomeContent() {
  return (
    <AppLayout>
      <HeroSection />
      <WelcomeSection />
      <LinkSection />
      <DevotionalSection />
      <WorshipSection />
      <WorshipExperienceSection />
      <VideoCarousel videos={videos} />
    </AppLayout>
  )
}
