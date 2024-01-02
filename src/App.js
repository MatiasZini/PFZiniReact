import './App.css';
import NavBar from './components/NavBar/NavBar';
import logoRainbow from "./assets/black_rainbow2.png"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import ItemCount from "./components/ItemCount/ItemCount";
 */import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
 import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <BrowserRouter>
        <NavBar img={logoRainbow}/>
        <Routes>
          <Route path="/" element= { <ItemListContainer />}/>
          <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
          <Route path="/item/:itemId" element= {<ItemDetailContainer/>}/>
          <Route path="*" element= {<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};


export default App;
