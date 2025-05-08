// import fcmbIcon from '@/assets/images/giving/fcmb.svg'
// import fbnIcon from '@/assets/images/giving/first-bank.svg'
// import gtbIcon from '@/assets/images/giving/gtb.svg'
import gtbIcon from '@/assets/images/giving/paypal.webp'
// import ubaIcon from '@/assets/images/giving/uba.svg'
// import zenithIcon from '@/assets/images/giving/zenith.svg'
import { StaticImageData } from 'next/image'

const offlineChannels: {
  color: string
  icon: StaticImageData
  accountName: string
  accountNumber: string
}[] = [
  {
    accountName: 'The Shalom Mission Church',
    accountNumber: '001 0916 633',
    color: '#DE4A09',
    icon: gtbIcon,
  },
  // {
  //   accountName: 'The Shalom Mission Church',
  //   accountNumber: '366 2370 022',
  //   color: '#5A0B4D',
  //   icon: fcmbIcon,
  // },
  // {
  //   accountName: 'The Shalom Mission Church',
  //   accountNumber: '101 6346 517',
  //   color: '#D61B0C',
  //   icon: ubaIcon,
  // },
  // // {
  // //   accountName: 'The Shalom Mission Church',
  // //   accountNumber: '202 1398 890',
  // //   color: '#03476E',
  // //   icon: fbnIcon,
  // // },
  // // // {
  // // //   accountName: 'The Shalom Mission Church',
  // // //   accountNumber: '101 0811 367',
  // // //   color: '#808285',
  // // //   icon: zenithIcon,
  // // // },
]

export default offlineChannels
