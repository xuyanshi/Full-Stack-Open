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
      <p>Hello {props.name}, you're {props.age} years old.</p>
    </div>
  )
}

const App = () => { 
  const name = "Maitian"
  const age = 24
  return (
  <div>
    <h1>Hello World</h1>
    <Hello name="Emo" age="23" />
    <Hello name={name} age={age} />
  </div>
  )
}

export default App;
