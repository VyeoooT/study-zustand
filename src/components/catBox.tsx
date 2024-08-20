import { useCatStore } from "../stores/catStore"

function CatBox() {
    // const bigCats = useCatStore((state) => state.cats.bigCats)
    // const smallCats = useCatStore((state) => state.cats.smallCats)
    // const increaseBigCats = useCatStore((state) => state.increaseBigCats)
    // const increaseSmallCats = useCatStore((state) => state.increaseSmallCats)
    // const summary = useCatStore((state) => state.summary)

    const { cats: { bigCats, smallCats}, increaseBigCats, increaseSmallCats, summary } = useCatStore()

    console.log(summary())

    return (
        <div className="box">
            <h1>Cat Box</h1>
            <p>big cats: {bigCats}</p>
            <p>small cats: {smallCats}</p>
            <p>{Math.random()}</p>

            <div>
                <button onClick={increaseBigCats}>Add Big Cats</button>
                <button onClick={increaseSmallCats}>Add Small Cats</button>
            </div>
        </div>
    )
}

export default CatBox
