import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log("clicked")
  }

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log("rending...",counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}

export default App