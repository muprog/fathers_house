// 'use client'
// import React from 'react'
// import offlineChannels from './data'
// import Image from 'next/image'
// import { copyToClipboard } from '@/functions/utils'
// import { removeSpacesFromString } from '@/functions/stringManipulations'
// import { sendFeedback } from '@/functions/feedback'

// const OfflineChannels = () => {
//   return (
//     <div id='offline-giving-channels' className='px-primary py-[100px]'>
//       <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-3'>
//         Offline Giving Channels
//       </h2>
//       <p className='text-lg lg:text-2xl text-center font-medium mb-[113px]'>
//         Give through a simple and secure payment platform
//       </p>
//       <ul className='flex flex-col gap-[66px] items-center w-full'>
//         {offlineChannels.map((item, index) => (
//           <li
//             key={index}
//             className='flex items-stretch gap-5 w-full flex-wrap justify-center'
//           >
//             <Image
//               src={item.icon}
//               width={200}
//               height={200}
//               className='object-contain w-[152px] h-[152px] max-w-full'
//               alt='bank'
//             />
//             <div
//               className='bg-white px-[34px] w-[478px] max-w-full py-5 rounded-[5px] flex flex-col justify-center gap-[5px] border cursor-pointer hover:bg-primary hover:!text-white duration-300 group'
//               style={{
//                 borderColor: item.color,
//               }}
//               onClick={() => {
//                 copyToClipboard(removeSpacesFromString(item.accountNumber))
//                 sendFeedback('Account number copied', 'info')
//               }}
//             >
//               <p
//                 style={{
//                   color: item.color,
//                 }}
//                 className='font-bold text-[30px] lg:text-[40px] group-hover:!text-white font-secondary'
//               >
//                 {item.accountNumber}
//               </p>
//               <span className='text-lg lg:text-2xl font-bold'>
//                 {item.accountName}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default OfflineChannels

// 'use client'
// import React, { useEffect, useRef, useState } from 'react'
// import offlineChannels from './data'
// import Image from 'next/image'
// import { copyToClipboard } from '@/functions/utils'
// import { removeSpacesFromString } from '@/functions/stringManipulations'
// import { sendFeedback } from '@/functions/feedback'

// const PAYPAL_CLIENT_ID =
//   'AUIdYNjn6jhRNKNQNO-Lk7W67gRKpZ_2zhQ7fdbLiD2TU2Deaf7Ucg_XTrWcycyQd2ewK6LPyycD8aZm'

// declare global {
//   interface Window {
//     paypal: any
//   }
// }

// const OfflineChannels = () => {
//   const paypalRef = useRef<HTMLDivElement>(null)
//   const [amount, setAmount] = useState('10.00') // default donation amount
//   const [buttonRendered, setButtonRendered] = useState(false)

//   useEffect(() => {
//     const loadPayPalScript = async () => {
//       if (!document.getElementById('paypal-sdk')) {
//         const script = document.createElement('script')
//         script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`
//         script.id = 'paypal-sdk'
//         script.async = true
//         script.onload = renderPayPalButton
//         document.body.appendChild(script)
//       } else {
//         renderPayPalButton()
//       }
//     }

//     const renderPayPalButton = () => {
//       if (paypalRef.current) {
//         paypalRef.current.innerHTML = '' // Clear previous button
//       }

//       if (window.paypal) {
//         window.paypal
//           .Buttons({
//             createOrder: (data: any, actions: any) => {
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     amount: {
//                       value: amount || '1.00',
//                     },
//                   },
//                 ],
//               })
//             },
//             onApprove: (data: any, actions: any) => {
//               return actions.order.capture().then((details: any) => {
//                 alert(
//                   `Thank you ${details.payer.name.given_name} for donating $${amount}!`
//                 )
//               })
//             },
//           })
//           .render(paypalRef.current!)
//       }
//     }

//     loadPayPalScript()
//   }, [amount])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAmount(e.target.value)
//     setButtonRendered(false) // force re-render of PayPal button
//   }

//   return (
//     <div id='offline-giving-channels' className='px-primary py-[100px]'>
//       <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary mb-3'>
//         Offline Giving Channels
//       </h2>
//       <p className='text-lg lg:text-2xl text-center font-medium mb-10'>
//         Give through a simple and secure payment platform
//       </p>

//       {/* 💰 Donation Input + PayPal */}
//       <div className='flex flex-col items-center gap-5 mb-[80px]'>
//         <input
//           type='number'
//           min='1'
//           step='0.01'
//           value={amount}
//           onChange={handleChange}
//           className='border px-4 py-2 rounded w-[200px] text-center text-xl'
//           placeholder='Enter amount (USD)'
//         />
//         <div ref={paypalRef} />
//       </div>

//       {/* 💳 Offline Channels */}
//       <ul className='flex flex-col gap-[66px] items-center w-full'>
//         {offlineChannels.map((item, index) => (
//           <li
//             key={index}
//             className='flex items-stretch gap-5 w-full flex-wrap justify-center'
//           >
//             <Image
//               src={item.icon}
//               width={200}
//               height={200}
//               className='object-contain w-[152px] h-[152px] max-w-full'
//               alt='bank'
//             />
//             <div
//               className='bg-white px-[34px] w-[478px] max-w-full py-5 rounded-[5px] flex flex-col justify-center gap-[5px] border cursor-pointer hover:bg-primary hover:!text-white duration-300 group'
//               style={{ borderColor: item.color }}
//               onClick={() => {
//                 copyToClipboard(removeSpacesFromString(item.accountNumber))
//                 sendFeedback('Account number copied', 'info')
//               }}
//             >
//               <p
//                 style={{ color: item.color }}
//                 className='font-bold text-[30px] lg:text-[40px] group-hover:!text-white font-secondary'
//               >
//                 {item.accountNumber}
//               </p>
//               <span className='text-lg lg:text-2xl font-bold'>
//                 {item.accountName}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default OfflineChannels

// 'use client'
// import React, { useEffect, useRef, useState } from 'react'
// import offlineChannels from './data'
// import Image from 'next/image'
// import { copyToClipboard } from '@/functions/utils'
// import { removeSpacesFromString } from '@/functions/stringManipulations'
// import { sendFeedback } from '@/functions/feedback'

// const PAYPAL_CLIENT_ID =
//   'AUIdYNjn6jhRNKNQNO-Lk7W67gRKpZ_2zhQ7fdbLiD2TU2Deaf7Ucg_XTrWcycyQd2ewK6LPyycD8aZm'

// declare global {
//   interface Window {
//     paypal: any
//   }
// }

// const OfflineChannels = () => {
//   const paypalRef = useRef<HTMLDivElement>(null)
//   const [amount, setAmount] = useState<number>(10.0)
//   const [buttonRendered, setButtonRendered] = useState(false)

//   useEffect(() => {
//     const loadPayPalScript = async () => {
//       if (!document.getElementById('paypal-sdk')) {
//         const script = document.createElement('script')
//         script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`
//         script.id = 'paypal-sdk'
//         script.async = true
//         script.onload = renderPayPalButton
//         document.body.appendChild(script)
//       } else {
//         renderPayPalButton()
//       }
//     }

//     const renderPayPalButton = () => {
//       if (paypalRef.current) {
//         paypalRef.current.innerHTML = '' // Clear previous button
//       }

//       const parsedAmount = amount
//       if (isNaN(parsedAmount) || parsedAmount <= 0) return

//       if (window.paypal) {
//         window.paypal
//           .Buttons({
//             createOrder: (data: any, actions: any) => {
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     amount: {
//                       value: parsedAmount.toFixed(2),
//                     },
//                   },
//                 ],
//               })
//             },
//             onApprove: (data: any, actions: any) => {
//               return actions.order.capture().then((details: any) => {
//                 alert(
//                   `Thank you ${
//                     details.payer.name.given_name
//                   } for donating $${parsedAmount.toFixed(2)}!`
//                 )
//               })
//             },
//           })
//           .render(paypalRef.current!)
//       }
//     }

//     loadPayPalScript()
//   }, [amount])

//   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setAmount(e.target.value)
//   //   setButtonRendered(false) // force re-render of PayPal button
//   // }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value)
//     if (!isNaN(value)) {
//       setAmount(value)
//       setButtonRendered(false)
//     }
//   }

//   return (
//     <div id='offline-giving-channels' className='px-primary py-[100px]'>
//       <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary mb-3'>
//         Offline Giving Channels
//       </h2>
//       <p className='text-lg lg:text-2xl text-center font-medium mb-10'>
//         Give through a simple and secure payment platform
//       </p>

//       {/* 💰 Donation Input + PayPal */}
//       <div className='flex flex-col items-center gap-5 mb-[80px]'>
//         <input
//           type='number'
//           min='1'
//           step='0.01'
//           value={amount}
//           onChange={handleChange}
//           className='border px-4 py-2 rounded w-[200px] text-center text-xl'
//           placeholder='Enter amount (USD)'
//         />
//         <div ref={paypalRef} />
//       </div>

//       {/* 💳 Offline Channels */}
//       <ul className='flex flex-col gap-[66px] items-center w-full'>
//         {offlineChannels.map((item, index) => (
//           <li
//             key={index}
//             className='flex items-stretch gap-5 w-full flex-wrap justify-center'
//           >
//             <Image
//               src={item.icon}
//               width={200}
//               height={200}
//               className='object-contain w-[152px] h-[152px] max-w-full'
//               alt='bank'
//             />
//             <div
//               className='bg-white px-[34px] w-[478px] max-w-full py-5 rounded-[5px] flex flex-col justify-center gap-[5px] border cursor-pointer hover:bg-primary hover:!text-white duration-300 group'
//               style={{ borderColor: item.color }}
//               onClick={() => {
//                 copyToClipboard(removeSpacesFromString(item.accountNumber))
//                 sendFeedback('Account number copied', 'info')
//               }}
//             >
//               <p
//                 style={{ color: item.color }}
//                 className='font-bold text-[30px] lg:text-[40px] group-hover:!text-white font-secondary'
//               >
//                 {item.accountNumber}
//               </p>
//               <span className='text-lg lg:text-2xl font-bold'>
//                 {item.accountName}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default OfflineChannels

'use client'
import React, { useEffect, useRef, useState } from 'react'
import offlineChannels from './data'
import Image from 'next/image'
import { copyToClipboard } from '@/functions/utils'
import { removeSpacesFromString } from '@/functions/stringManipulations'
import { sendFeedback } from '@/functions/feedback'

const PAYPAL_CLIENT_ID =
  // 'AUIdYNjn6jhRNKNQNO-Lk7W67gRKpZ_2zhQ7fdbLiD2TU2Deaf7Ucg_XTrWcycyQd2ewK6LPyycD8aZm' //sandbox client id
  'Ae93KpTA7-YUVOZoKdMRuSLf54sJo5DDxG6C1SJiaqHaojoNbfG2eWX9dJ4XDicdpnrUZQHitIjGgP8d'

declare global {
  interface Window {
    paypal: any
  }
}

const OfflineChannels = () => {
  const paypalRef = useRef<HTMLDivElement>(null)
  const [amount, setAmount] = useState<number>(10.0)
  const [paypalSdkReady, setPaypalSdkReady] = useState(false)
  const paypalButtons = useRef<any>(null)
  const renderTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // Check if script already exists
    if (document.querySelector(`script[src^="https://www.paypal.com/sdk"]`)) {
      setPaypalSdkReady(true)
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`
    script.async = true
    script.onload = () => {
      setPaypalSdkReady(true)
    }
    script.onerror = () => {
      console.error('Failed to load PayPal SDK')
    }
    document.body.appendChild(script)

    return () => {
      // Clean up script if we're the ones who added it
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (!paypalSdkReady || !window.paypal || !paypalRef.current) return

    // Clear any pending renders
    if (renderTimeout.current) {
      clearTimeout(renderTimeout.current)
    }

    // Debounce the render to avoid rapid re-renders
    renderTimeout.current = setTimeout(() => {
      try {
        // Clean up previous buttons
        if (paypalButtons.current) {
          paypalButtons.current.close()
          paypalButtons.current = null
        }

        // Clear the container
        if (paypalRef.current) {
          paypalRef.current.innerHTML = ''
        }

        const parsedAmount = parseFloat(amount.toFixed(2))
        if (isNaN(parsedAmount) || parsedAmount <= 0) return

        // Render new buttons
        paypalButtons.current = window.paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
          },
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: parsedAmount.toFixed(2),
                    currency_code: 'USD',
                  },
                },
              ],
            })
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              alert(
                `Thank you ${
                  details.payer.name.given_name
                } for donating $${parsedAmount.toFixed(2)}!`
              )
            })
          },
          onError: (err: any) => {
            console.error('PayPal error:', err)
          },
        })

        if (paypalRef.current) {
          paypalButtons.current.render(paypalRef.current)
        }
      } catch (error) {
        console.error('Error rendering PayPal button:', error)
      }
    }, 300) // 300ms debounce delay

    return () => {
      if (renderTimeout.current) {
        clearTimeout(renderTimeout.current)
      }
    }
  }, [amount, paypalSdkReady])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value) && value > 0) {
      setAmount(value)
    }
  }

  return (
    <div id='offline-giving-channels' className='px-primary py-[100px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary mb-3'>
        Offline Giving Channels
      </h2>
      <p className='text-lg lg:text-2xl text-center font-medium mb-10'>
        Give through a simple and secure payment platform
      </p>

      {/* 💰 Donation Input + PayPal */}
      <div className='flex flex-col items-center gap-5 mb-[80px]'>
        <input
          type='number'
          min='1'
          step='0.01'
          value={amount}
          onChange={handleChange}
          className='border px-4 py-2 rounded w-[200px] text-center text-xl'
          placeholder='Enter amount (USD)'
        />
        <div ref={paypalRef} className='min-h-[50px]'>
          {!paypalSdkReady && <p>Loading PayPal...</p>}
        </div>
      </div>

      {/* 💳 Offline Channels */}
      {/* <ul className='flex flex-col gap-[66px] items-center w-full'>
        {offlineChannels.map((item, index) => (
          <li
            key={index}
            className='flex items-stretch gap-5 w-full flex-wrap justify-center'
          >
            <Image
              src={item.icon}
              width={200}
              height={200}
              className='object-contain w-[152px] h-[152px] max-w-full'
              alt='bank'
            />
            <div
              className='bg-white px-[34px] w-[478px] max-w-full py-5 rounded-[5px] flex flex-col justify-center gap-[5px] border cursor-pointer hover:bg-primary hover:!text-white duration-300 group'
              style={{ borderColor: item.color }}
              onClick={() => {
                copyToClipboard(removeSpacesFromString(item.accountNumber))
                sendFeedback('Account number copied', 'info')
              }}
            >
              <p
                style={{ color: item.color }}
                className='font-bold text-[30px] lg:text-[40px] group-hover:!text-white font-secondary'
              >
                {item.accountNumber}
              </p>
              <span className='text-lg lg:text-2xl font-bold'>
                {item.accountName}
              </span>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default OfflineChannels
