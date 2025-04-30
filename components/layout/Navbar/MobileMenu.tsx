'use client'
import { useState, useRef, useEffect } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import MenuIcon from '@/assets/svgs/layout/menu.svg'
import autoAnimate from '@formkit/auto-animate'
import Image from 'next/image'
import links from './links'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { appAxios } from '@/api/axios'
import { signOut } from '@/store/slices/user'

function MobileMenu() {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { user } = useAppSelector((state) => state.user)
  const parentRef = useRef(null)

  const handleLogout = async () => {
    try {
      await appAxios.post('/auth/logout')
      dispatch(signOut())
      router.push('/')
      setOpen(false)
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const handleLinkClick = (destination: string) => {
    if (destination === '#') {
      // If the link is not active, just close the menu
      setOpen(false)
      return
    }
    // For active links, navigate and close the menu
    router.push(destination)
    setOpen(false)
  }

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current)
    }
  }, [parentRef])

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='relative z-50'>
        <button
          onClick={() => setOpen(!open)}
          className='w-[26.91px] h-[26.91px] bg-[#D9D9D9] rounded-full flex items-center justify-center hover:brightness-90 duration-300'
        >
          <Image src={MenuIcon} alt='Menu' />
        </button>
        {open && (
          <div
            ref={parentRef}
            className='absolute right-0 top-[40px] w-[200px] bg-white rounded-[10px] shadow-lg py-4 z-50'
          >
            <div className='flex flex-col'>
              {links.map((link, index) => (
                <button
                  key={`${link.title}-${index}`}
                  onClick={() => handleLinkClick(link.destination)}
                  className='px-4 py-2 text-left hover:bg-gray-100 w-full'
                >
                  {link.title}
                </button>
              ))}
              {user ? (
                <button
                  onClick={handleLogout}
                  className='px-4 py-2 text-left hover:bg-gray-100 text-red-500'
                >
                  Log out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleLinkClick('/auth/login')}
                    className='px-4 py-2 text-left hover:bg-gray-100'
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => handleLinkClick('/auth/register')}
                    className='px-4 py-2 text-left hover:bg-gray-100'
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </ClickAwayListener>
  )
}

export default MobileMenu
