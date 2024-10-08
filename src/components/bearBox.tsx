import { useEffect, useState } from "react"
import { useBearStore } from "../stores/bearStore"
import { useFoodStore } from "../stores/foodStore"
import { shallow } from "zustand/shallow"

function BearBox() {
    // const bears = useBearStore(state => state.bears)
    // const increasePopulation = useBearStore(state => state.increasePopulation)
    // const removeAllBears = useBearStore(state => state.removeAllBears)

    const { bears, increasePopulation, removeAllBears } = useBearStore()
    const [bgColor, setBgColor] = useState<"lightgreen" | "lightpink" | undefined>
    (useFoodStore.getState().fish > 5 ? "lightgreen" : "lightpink")

    // const fish = useFoodStore(state => state.fish)
    
    useEffect(() => {
        // const unsub = useFoodStore.subscribe((state, prevState) => {
        //     console.log(state, prevState)

        //     if (prevState.fish <= 5 && state.fish > 5) {
        //         setBgColor("lightgreen")
        //     }
        //     else if (prevState.fish > 5 && state.fish <= 5) {
        //         setBgColor("lightpink")
        //     }
        // })
        const unsub = useFoodStore.subscribe(
            (state) => state.fish,
            (fish, prevFish) => {
                // if (fish === prevFish) {
                //     if (fish <= 5) {
                //         setBgColor("lightpink")
                //     }
                //     else {
                //         setBgColor("lightgreen")
                //     }
                // }

                if (prevFish <=5 && fish > 5) {
                    setBgColor("lightgreen")
                }
                else if (prevFish >=5 && fish < 5) {
                    setBgColor("lightpink")
                }

                console.log("fish: ", fish, " - ", "prevFish: ", prevFish)
            },
            {
                equalityFn: shallow,
                fireImmediately: true,
            }
        )

        return unsub
    }, [])

    return (
        <div
            className="box"
            style={{ backgroundColor: bgColor }}
        >
            <h1>Bear Box</h1>
            <p>bears: {bears}</p>
            <p>{Math.random()}</p>

            <div>
                <button onClick={increasePopulation}>Add Bear</button>
                <button onClick={removeAllBears}>Remove All Bears</button>
                <button onClick={useBearStore.persist.clearStorage}>Clear storage</button>
            </div>
        </div>
    )
}

export default BearBox
