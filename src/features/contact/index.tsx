'use client'
import Typography from '@/components/Typography'
import clsx from 'clsx'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import { verifyCaptcha } from './api/verifyCaptcha'
import { handleSendEmail } from './api/handleSendEmail'
import { InputData, InputLabelProps } from './types'

const PersonalDetails = () => {
  const contact = [
    {
      label: 'es23jr@gmail.com',
      href: 'mailto:es23jr@gmail.com',
    },
  ]

  const socials = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/trpfsu/',
    },
    {
      label: 'Github',
      href: 'https://github.com/eds2002',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eduardo-sanchez-93a191227/',
    },
  ]

  const ContactLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="text-white"
      style={{
        fontSize: 'clamp(0.5rem, 0.744rem + 0.818vw, 1rem)',
      }}
    >
      {label}
    </Link>
  )

  return (
    <aside className="flex-0 ">
      <div className="flex flex-col gap-12 md:gap-24">
        <div className="flex flex-col">
          <Typography
            variant="h2"
            className="text-xs uppercase pb-4 opacity-50 "
          >
            Contact Details
          </Typography>
          {contact.map((item) => (
            <ContactLink key={item.label} {...item} />
          ))}
        </div>
        <div className=" flex flex-col">
          <Typography
            variant="h2"
            className="text-xs uppercase pb-4 opacity-50 "
          >
            Socials
          </Typography>
          {socials.map((item) => (
            <ContactLink key={item.label} {...item} />
          ))}
        </div>
      </div>
    </aside>
  )
}

const Header = () => (
  <>
    <Link href="/">
      <ChevronLeft className="cursor-pointer" size={40} color="white" />
    </Link>
    <Typography
      variant="h1"
      className="max-w-3xl font-medium"
      style={{
        fontSize: 'clamp(2.813rem, 0.398rem + 7.727vw, 8.125rem)',
      }}
    >
      Just one email away
    </Typography>
  </>
)

const InputLabel = ({ label, hasValue, idx, name }: InputLabelProps) => (
  <div
    className={clsx(
      'flex flex-row gap-6 transition text-white items-center opacity-50',
      {
        'opacity-100': !hasValue,
      }
    )}
    style={{
      fontSize: 'clamp(1rem, 0.744rem + 0.818vw, 1.3rem)',
    }}
  >
    <span className="block opacity-50 pointer-events-none select-none">
      {idx + 1}
    </span>
    <label htmlFor={name}>{label}</label>
  </div>
)

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputData>()
  const recaptchaRef = useRef<any>(null)

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    try {
      const token = await recaptchaRef.current.executeAsync()

      await verifyCaptcha(token)

      const response = await handleSendEmail(data)
      console.log(response)
      recaptchaRef.current.reset()
    } catch (e) {
      console.log(e)
    }
  }

  const components = [
    {
      name: 'firstName',
      label: "What's your name?",
      type: 'input',
      placeholder: 'John Doe',
    },
    {
      name: 'email',
      label: "What's your email?",
      type: 'input',
      placeholder: 'johndoe@gmail.com',
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
    {
      name: 'message',
      label: "What's your message?",
      placeholder: 'Hello! I am emailing about ...',
      type: 'textarea',
    },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY as string} // Replace with your site key
        size="invisible"
      />
      {components.map((component, idx) => {
        const { name, type } = component

        const Component = type as any

        return (
          <div
            key={name}
            className="flex flex-col gap-2 py-6 border-y border-tertiary-11/25"
          >
            <InputLabel
              {...component}
              idx={idx}
              hasValue={watch(name as any)}
            />
            <Component
              {...register(name as any, {
                required: true,
                pattern: component.pattern,
              })}
              {...component}
              className={clsx(
                'appearance-none bg-transparent  focus:outline-none focus:border-primary-11 transition-colors pl-9 text-white resize-none',
                {
                  'h-24': type === 'textarea',
                }
              )}
              style={{
                fontSize: 'clamp(1rem, 0.744rem + 0.818vw, 1.3rem)',
              }}
            />
          </div>
        )
      })}

      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="px-3 py-1.5 float-right  border-tertiary-1/60 border-2 rounded-full text-tertiary-1 font-medium hover:border-tertiary-1 transition mt-20 md:mt-28 self-end justify-self-end disabled:text-gray-400 disabled:border-gray-300"
        disabled={Object.keys(errors).length > 0}
      >
        {'Send Message'}
      </button>
    </form>
  )
}

const ContactSection = () => {
  return (
    <section className="flex md:items-center md:justify-between flex-col-reverse md:flex-row gap-20 md:gap-28">
      <Contact />
      <PersonalDetails />
    </section>
  )
}

export function ContactPage() {
  return (
    <main className="max-w-[100em] px-6 sm:px-10 md:px-12 lg:px-24 mx-auto gap-20 md:gap-28 flex flex-col pt-12 pb-[128px]">
      <Header />
      <ContactSection />
    </main>
  )
}
