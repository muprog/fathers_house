import InstagramIcon from '@/assets/svgs/social/instagram.svg'
import FacebookIcon from '@/assets/svgs/social/facebook.svg'
import YoutubeIcon from '@/assets/svgs/social/youtube.svg'

interface Link {
  alt: string
  src: string
  destination: string
}

const socialLinks: Link[] = [
  {
    alt: 'Youtube Channel',
    src: YoutubeIcon,
    // destination: 'https://www.youtube.com/@TFHCOnlineTv',
    destination: 'https://www.youtube.com',
  },
  {
    alt: 'Facebook Profile',
    src: FacebookIcon,
    destination: 'https://www.facebook.com',
    // destination: 'https://www.facebook.com/tfhcng',
  },
  {
    alt: 'Instagram Profile',
    src: InstagramIcon,
    destination: 'https://www.instagram.com',
    // destination: 'https://www.instagram.com/tfhcng/',
  },
]

export default socialLinks
