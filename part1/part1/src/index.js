import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

counter = 10
refresh()
ReactDOM.createRoot(document.getElementById('root')).render(
  <App counter={counter} />
)