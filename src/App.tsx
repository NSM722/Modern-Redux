import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counterSlice'
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // grab/extract the current value of the counter and display it on the UI
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const { data=[], isFetching } = useFetchBreedsQuery()

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
          
          <div>
            <p>Number of dogs fetched: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((breed) => (
                    <tr key={breed.id}>
                      <td>{breed.name}</td>
                      <td>
                        <img src={breed.image.url} alt={breed.name} height={250}/>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
