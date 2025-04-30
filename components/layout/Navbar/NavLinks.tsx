'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import links from './links'

function NavLinks() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActiveRoute = (route: string) => {
    if (!mounted) return false
    return pathname === route
  }

  return (
    <div className='flex items-center'>
      <div className='flex items-center gap-9'>
        {links.map((link, index) => (
          <Link
            key={`${link.title}-${index}`}
            href={link.destination}
            className={
              isActiveRoute(link.destination)
                ? 'pl-[10px] pr-[10px] pb-[10px] pt-[10px] border-b-secondary border-b-[3px] text-secondary'
                : ''
            }
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* <Button className='ml-[4vw]'>Log in</Button> */}
    </div>
  )
}

export default NavLinks
