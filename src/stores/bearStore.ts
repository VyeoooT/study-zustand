import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type TBearStoreState = {
  bears: number
  color: string
  size: string
  increasePopulation: () => void
  removeAllBears: () => void
  getOwner: () => Promise<string>
}

export const useBearStore = create<TBearStoreState>()(
  persist(
    (set) => ({
      bears: 0,
      color: "red",
      size: "big",
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      getOwner: async () => {
        const response = await fetch("https://api.github.com/users/1")
        const owner = await response.json()
        
        console.log("owner name: ", owner.name)
        return owner.name
      },
    }),
    {
      name: "bear store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['color', 'size'].includes(key)),
        ),
    }
  ),
)
