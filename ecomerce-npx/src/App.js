import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import BarTop from "./components/BarTop/BarTop";
import About from "./components/About/About";

import ItemListContainer from "./components/container/ItemListContainer";
import Formulario from "./components/Formulario/Formulario";
import ItemListContainerD from "./components/container/ItemListContainerD";


function App() {
  return (
    <>
      <BarTop />
      <NavBar />
      <ItemListContainer greeting={"Hola soy ItemListcontainer"} />
      <ItemListContainerD greeting={""} />
      <About />
      <div>
        
        <Formulario />
      </div>
    </>
  );
}

export default App;
