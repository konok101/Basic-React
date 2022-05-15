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
      <Person name="konok" age= "22"></Person>
      <Person name='Billa' age='33'></Person>
      <Person  name ='Rocky bhai' age='222'></Person>
    

      <h1>Rocky bhai component started</h1>
      <Friend name='nur' behave='good'></Friend>
      <Friend name='biplob' behave='not bad'></Friend>
     
     

   
    </div>
  );
}

function Person(props){
  return ( 
  <div className='person'>
    <h1> Name: {props.name} </h1>
    <p> Age: {props.age}</p>
  </div>
  )
}

function Friend(p){
  return(
    <div className='container'>
      <h1> Name: {p.name}  </h1>
      <h4>Behave: {p.behave}</h4>
    </div>
  )
}
export default App;
