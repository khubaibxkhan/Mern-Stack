import { Counter } from "./components/Counter"
import "./App.css"
import { Live } from "./components/Live"

function App() {

  return (
    <>
      <div className="counter-container">
            <Counter />
      </div>
      <div>
        <Live />
      </div>
      </>
  )
}

export default App
