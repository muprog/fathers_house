import AboutHeader from '@/components/aboutPage/AboutHeader'
import HistorySection from '@/components/aboutPage/HistorySection'
import PastorsSection from '@/components/aboutPage/PastorsSection'
import StatementOfFaithSection from '@/components/aboutPage/StatementOfFaithSection'
import VisionSection from '@/components/aboutPage/VisionSection'
import AppLayout from '@/components/layout/AppLayout'
import React from 'react'
import BeliefsSection from '@/components/aboutPage/BeliefsSection'

function About() {
  return (
    <AppLayout>
      <AboutHeader />
      <HistorySection />
      <VisionSection />
      <StatementOfFaithSection />
      <PastorsSection />
      <BeliefsSection />
    </AppLayout>
  )
}

export default About
