import './App.css';
import NavBar from './components/NavBar/NavBar';
import logoRainbow from "./assets/black_rainbow2.png"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App(){
  return (
    <div>
      <NavBar img={logoRainbow}/>
      <ItemListContainer greeting={"Compre aquí!"}/>
    </div>
  )
}


export default App;
