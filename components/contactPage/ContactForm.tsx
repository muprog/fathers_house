'use client'
import React, { useState } from 'react'
import Button from '@/common/Button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // TODO: Replace with actual API call
      console.log('Form submitted:', formData)

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon.',
      })
      setFormData({ name: '', email: '', comment: '' })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          'Sorry, there was an error sending your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-[600px] mx-auto mt-8 bg-white p-8 rounded-lg shadow-md'
    >
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-gray-700 text-lg font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Enter your full name'
            disabled={isSubmitting}
            className='bg-white text-gray-900 p-3 rounded-[5px] border border-gray-300 focus:outline-none focus:border-secondary disabled:bg-gray-100 disabled:cursor-not-allowed'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-gray-700 text-lg font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Enter your email address'
            disabled={isSubmitting}
            className='bg-white text-gray-900 p-3 rounded-[5px] border border-gray-300 focus:outline-none focus:border-secondary disabled:bg-gray-100 disabled:cursor-not-allowed'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label
            htmlFor='comment'
            className='text-gray-700 text-lg font-medium'
          >
            Comment
          </label>
          <textarea
            id='comment'
            name='comment'
            value={formData.comment}
            onChange={handleChange}
            required
            rows={4}
            placeholder='Type your message here...'
            disabled={isSubmitting}
            className='bg-white text-gray-900 p-3 rounded-[5px] border border-gray-300 focus:outline-none focus:border-secondary resize-none disabled:bg-gray-100 disabled:cursor-not-allowed'
          />
        </div>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-md ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <Button type='submit' className='mt-4' disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
