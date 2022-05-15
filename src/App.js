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
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>

      <h1>Rocky bhai component started</h1>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
     

   
    </div>
  );
}

function Person(){
  return ( 
  <div className='person'>
    <h1>Sakib all hasen</h1>
    <p>proffesion: cricter</p>
  </div>
  )
}

function Friend(){
  return(
    <div className='container'>
      <h1>Name: Rocky bhai</h1>
      <h4>Profession: Maramari</h4>
    </div>
  )
}
export default App;
