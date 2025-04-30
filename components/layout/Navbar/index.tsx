'use client'
import React from 'react'
import Logo from '@/assets/brand/logo.png'
import Image from 'next/image'
import NavLinks from './NavLinks'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

function Navbar() {
  return (
    <nav className='w-full bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24'>
        <div className='flex justify-between items-center h-full'>
          <Link href='/'>
            <Image
              src={Logo}
              alt="The Father's House"
              className='h-[90px] w-auto'
            />
          </Link>
          <div className='hidden lg:block'>
            <NavLinks />
          </div>
          <div className='lg:hidden block'>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
