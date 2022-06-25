import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import BarTop from "./components/BarTop/BarTop";
import About from "./components/About/About";

import ItemListContainer from "./components/container/ItemListContainer";

function App() {
  return (
    <>
      <BarTop />
      <NavBar />
      <ItemListContainer />
      <About />
    </>
  );
}

export default App;
