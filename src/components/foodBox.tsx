import { useFoodStore, addOneFish, removeOneFish, removeAllFish } from "../stores/foodStore"

export const FoodBox = () => {
  // const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore()

  // const fish = useFoodStore.getState().fish // non-reactive
  const fish = useFoodStore((state) => state.fish)

  // const addOneFish = useFoodStore((state) => state.addOneFish)
  // const removeOneFish = useFoodStore((state) => state.removeOneFish)
  // const removeAllFish = useFoodStore((state) => state.removeAllFish)

  const add5fish = () => {
    useFoodStore.setState((state) => ({
      fish: state.fish + 5
    }))
  }

  return (
    <div className="box">
      <h1>Food Box</h1>
      <p>fish: {fish}</p>
      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fish</button>

        <button onClick={add5fish}>Add 5 fish</button>
      </div>
    </div>
  )
}