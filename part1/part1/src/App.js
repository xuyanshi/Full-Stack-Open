// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Hello = (props) => {
  return (
    <div>
      <p>It's a component: {props.name}</p>
    </div>
  )
}

const App = () => { 
  const name = "maitian"
  const age = 24
  return (
  <div>
    <h1>Hello World</h1>
    <Hello name = "Emo" />
  </div>
  )
}

export default App;
