import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import BarTop from "./components/BarTop/BarTop";
import ItemListContainer from "./components/container/ItemListContainer";
import Cart from "./components/container/Cart/Cart";
import ItemDetail from "./components/container/ItemDetail/ItemDetail";
import ItemList from "./components/container/ItemList/ItemList";
import React , {useState} from "react";
import { ItemsProvider } from "./components/ItemsContext";
import ItemCard from "./components/container/ItemCard/ItemCard";

const initialState = [
  { id: 45454, name: "Keyboard Dell", price: 20 },
  { id: 45458, name: "Mouse Dell", price: 10 },
  { id: 45459, name: "Samsung Monitor", price: 300 },
  { id: 45453, name: "MacBook Pro", price: 860 },
  { id: 45457, name: "Motorola S10", price: 660 },
];



const App = () => {
  const [items, setItems] = useState(initialState);

  return (
    <ItemsProvider>
    <BrowserRouter>
      <div>
        <BarTop />
        <NavBar items ={items}/>
        <ItemList items = {items}/>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <Routes>
          
          <Route path="/" element={<ItemListContainer greeting={"Hola soy ItemListcontainer"} />} />
          
          
           <Route path="/detalle/:id" element={<ItemDetail/> } />
           <Route path="/cart" element={<Cart/> } />
           <Route path="*" element={ <Navigate to = '/error404' />} />
          {/* <Header />
          <About />
          <Formulario /> */}
      
        </Routes>
        </div>
      </div>
    </BrowserRouter>
    </ItemsProvider>
  );
};

export default App;
