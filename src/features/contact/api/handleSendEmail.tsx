'use server'

import { Resend } from 'resend'
import { InputData } from '../types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function handleSendEmail(formData: InputData) {
  const { error } = await resend.emails.send({
    from: 'Acme <es23jr@gmail.com>',
    to: ['es23jr@gmail.com'],
    subject: 'New Contact Form Submission',
    react: `<>${formData.firstName}-${formData.email}-${formData.message}</>`,
  })

  if (error) return { status: 'ERROR', message: error.message }

  return { status: 'SUCCESS' }
}
