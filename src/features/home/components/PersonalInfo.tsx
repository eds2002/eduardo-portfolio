import Typography from '@/components/Typography'

export const PersonalInfo = () => (
  <div className="gap-4 flex flex-col flex-start">
    <Typography variant="h1" className="font-bold">
      Eduardo Sanchez
    </Typography>
    <Typography variant="h3" className="font-normal text-xl">
      Founder & Full stack developer at Transakt.
    </Typography>
    <Typography
      variant="p"
      affects={'removePMargin'}
      className="opacity-75 text-md max-w-xs"
    >
      Expertise in developing engaging web and mobile applications.
    </Typography>
  </div>
)
