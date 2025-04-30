'use client'
import React, { useState } from 'react'
import Button from '@/common/Button'

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', comment: '' })
    } catch (error) {
      setMessage('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id='contact-form' className='px-primary py-[93px] bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary mb-4'>
          Contact Us
        </h2>
        <p className='text-lg lg:text-2xl text-center font-medium mb-12 text-gray-600'>
          Have a question or feedback? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='inputContainer'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Enter your name'
            />
          </div>

          <div className='inputContainer'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Enter your email'
            />
          </div>

          <div className='inputContainer'>
            <label htmlFor='comment'>Message</label>
            <textarea
              id='comment'
              name='comment'
              value={formData.comment}
              onChange={handleChange}
              required
              placeholder='Enter your message'
              rows={4}
            />
          </div>

          <div className='flex justify-center'>
            <Button type='submit' className='!w-[200px]' loading={loading}>
              Send Message
            </Button>
          </div>

          {message && (
            <p
              className={`text-center ${
                message.includes('Failed') ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactFormSection
