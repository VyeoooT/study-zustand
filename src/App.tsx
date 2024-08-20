import BearBox from "./components/bearBox"
import CatBox from "./components/catBox"
import CatBox2 from "./components/catBox2"
import CatController from "./components/catController"
import { FoodBox } from "./components/foodBox"

function App() {
  return (
    <>
      <div className="container">
        <h1>Zustand</h1>

        {/* <div>
          <BearBox />
          <FoodBox />
        </div> */}

        <div>
          <CatBox />
          {/* <CatBox2 />
          <CatController /> */}
        </div>
      </div>
    </>
  )
}

export default App
