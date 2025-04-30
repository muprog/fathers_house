import React from 'react'
import ContactSection from './ContactSection'
import CopyrightSection from './CopyrightSection'
import LinkSection from './LinkSection'
import LogoSection from './LogoSection'

function Footer() {
  return (
    <footer className='w-full bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='pt-16 pb-12'>
          <div className='grid lg:grid-cols-3 gap-12 md:grid-cols-2 grid-cols-1'>
            <LogoSection />
            <LinkSection />
            <ContactSection />
          </div>
        </div>
        <CopyrightSection />
      </div>
    </footer>
  )
}

export default Footer
