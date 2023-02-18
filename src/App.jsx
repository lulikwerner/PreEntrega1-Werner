import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./componentes/CartContainer/CartContainer";

function App() {
  return (

    <BrowserRouter>
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element = {<ItemListContainer Greeting="Bienvenido a la Nueva tienda Online" />}/>
        <Route path='/categoria/:idCategoria' element = {<ItemListContainer Greeting="Bienvenido a la Nueva tienda Online" />}/>
        <Route path='/detalle/:idProduct' element = {<ItemDetailContainer/>}/>
        <Route path ='*' element = {<Navigate to = '/'/>}/>
        <Route path ='/carrito' element = {<CartContainer/>}/>
        <Route/>
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
   
  );
}

export default App;
