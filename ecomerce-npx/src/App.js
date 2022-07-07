import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import BarTop from "./components/BarTop/BarTop";
import About from "./components/About/About";
import ItemListContainer from "./components/container/ItemListContainer";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/container/Header";
import Cart from "./components/container/Cart/Cart";
import ItemDetail from "./components/container/ItemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <BarTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Hola soy ItemListcontainer"} /> } />
           <Route path="/detalle/:id" element={<ItemDetail/> } />
           <Route path="/cart" element={<Cart/> } />
           <Route path="*" element={ <Navigate to = '/error404' />} />
          {/* <Header />
          <About />
          <Formulario /> */}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
