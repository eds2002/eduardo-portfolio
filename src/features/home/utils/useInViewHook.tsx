import { MutableRefObject, useEffect } from 'react'
import useViewportStore from '../store/viewportStore'
import { useInView } from 'framer-motion'

export function useInViewHook({
  ref,
  name,
}: {
  ref: MutableRefObject<null>
  name: string
}) {
  const { setInView } = useViewportStore()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      setInView(name)
    }
  }, [inView])
}
