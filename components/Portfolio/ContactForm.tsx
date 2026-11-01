'use client'

import { useState, type FormEvent } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    setIsSubmitting(true)

    void fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Contact form submission failed: ${response.status}`)
        }

        form.reset()
        window.alert(
          'Thank you for contacting me, I will surely get back to you',
        )
      })
      .catch((error: unknown) => {
        console.error('Form submission error:', error)
        window.alert('Something went wrong, please fill the form again!')
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <form
      action="https://formspree.io/f/xwkgnpyq"
      method="POST"
      className="contact-form"
      id="myForm"
      onSubmit={handleContactSubmit}
    >
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="eg. John Doe"
      />

      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="eg. johndoe@example.com"
      />

      <label htmlFor="message">Your Message:</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="eg. I would like to work with you"
      />

      <button id="submit-btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
