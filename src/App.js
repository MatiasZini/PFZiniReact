import './App.css';
import NavBar from './components/NavBar/NavBar';
import logoRainbow from "./assets/black_rainbow2.png"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";

function App(){
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar img={logoRainbow}/>
          <Routes>
            <Route path="/" element= { <ItemListContainer />}/>
            <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
            <Route path="/item/:itemId" element= {<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}/>  
            <Route path="*" element= {<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
};


export default App;
