import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log("rending...",counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter+1)}>
        plus
      </button>
    </div>
  )
}

export default App