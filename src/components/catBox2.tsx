import { useCatStore } from "../stores/catStore"

function CatBox2() {
    // const { cats: {bigCats} } = useCatStore()
    const bigCats = useCatStore(state => state.cats.bigCats)

    return (
        <div className="box">
            <h1>Partial State from catStore</h1>
            <p>big cats: {bigCats}</p>
            <p>{Math.random()}</p>
        </div>
    )
}

export default CatBox2
