import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counterSlice'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // grab/extract the current value of the counter and display it on the UI
  const count = useAppSelector(state => state.counter.value)

  const dispatch = useAppDispatch()

  // onClick handler
  function handleClick() {
    dispatch(incremented())
    // dispatch(amountAdded(7))
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React-Redux + Vite + TS</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
