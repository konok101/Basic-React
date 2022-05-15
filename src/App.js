import logo from './logo.svg';
import './App.css';

const num= 22;
const singer1= {name: 'Dr mahafuz', job:'Singer1'}
const singer2= {name: 'Eva Rahaman', job: 'singer2'}
const singerStyle= {
  color: 'purple',
  backgroundColor: 'white'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>jsx</h1>
        <div className="container">
        <h3>Hello dude. REact how are you!!</h3>  
        </div>

        <div className="music">
          <p style={singerStyle}>Number: {num +3} </p>
          <p style={{backgroundColor:'red', padding: '20px' }}>First singer name {singer1.name} . Title {singer1.job}</p>
          <p>Secound singer name {singer2.name}. Title {singer2.job}</p>
        </div>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
