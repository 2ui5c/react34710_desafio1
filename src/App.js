import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <h1 className='title' style={ { color: "red" } }> Bienvenidos </h1>
      <p style={ { marginTop: "20px", color: "blue" } }>Proyecto de ReactJS. Desafío entregable N°2</p>
      <button onClick={ ()=> alert("hola") }> Hola </button>
    </div>
  );
}

export default App;
