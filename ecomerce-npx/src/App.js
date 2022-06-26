import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import BarTop from "./components/BarTop/BarTop";
import About from "./components/About/About";

import ItemListContainer from "./components/container/ItemListContainer";
import Formulario from "./components/Formulario/Formulario";

const objStyle = { color: "white", backgroundColor: "black", fontSize: 50 };
function App() {
  return (
    <>
      <BarTop />
      <NavBar />
      <ItemListContainer greeting={"Hola soy ItemListcontainer"} />
      <About />
      <div>
        
        <Formulario />
      </div>
    </>
  );
}

export default App;
