'use client'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import DirectionSection from '@/components/homepage/DirectionSection'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='bg-[#FFF5F2]'>
        {children}
        <DirectionSection />
      </main>
      <Footer />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default AppLayout
