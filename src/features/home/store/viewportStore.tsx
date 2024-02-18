import { create } from 'zustand'

type StoreState = {
  inView: string
  setInView: (inView: string) => void
}

const useViewportStore = create<StoreState>((set) => ({
  inView: 'About',
  setInView: (inView) => set({ inView }),
}))

export const changeCurrentView = (inView: string) => {
  useViewportStore.getState().setInView(inView)
}

export default useViewportStore
