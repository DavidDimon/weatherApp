import createHook from 'zustand'

interface ILocationState {
  location: any
  setLocation: (location: any) => void
}

const useLocationStore = createHook<ILocationState>((set) => ({
  location: null,
  setLocation: (location) => set({ location }),
}))

export default useLocationStore
