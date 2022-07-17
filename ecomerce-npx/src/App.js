import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import BarTop from "./components/BarTop/BarTop";
import ItemListContainer from "./components/container/ItemListContainer";
import Cart from "./components/container/Cart/Cart";
import ItemDetail from "./components/container/ItemDetail/ItemDetail";


function App() {
  return (
    <BrowserRouter>
      <div>
        <BarTop />
        <NavBar />
        <div className="row row-cols-1 row-cols-md-3 g-4">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
