'use client'
import { StaticImageData } from 'next/image'
import Giving from '../../../assets/images/home/links/giving.webp'
import Message from '../../../assets/images/home/links/message.webp'

export interface LinkType {
  image: StaticImageData
  label: string
  buttonLabel: string
  href: string
}

const links: LinkType[] = [
  {
    label: 'Messages',
    image: Message,
    buttonLabel: 'Learn from Him',
    href: '/resources',
  },
  {
    label: 'Giving',
    image: Giving,
    buttonLabel: 'Be part of His work',
    href: '/giving',
  },
]

export default links
