'use server'

export async function verifyCaptcha(captchaResponse: string) {
  try {
    const secret = process.env.GOOGLE_CAPTCHA_SCECRET_KEY
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaResponse}`,
      {
        method: 'POST',
      }
    )
    const data = await response.json()
    return data.success
  } catch (e) {
    throw new Error('Error verifying captcha.', { cause: e })
  }
}
