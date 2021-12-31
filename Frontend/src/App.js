// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from './pages/Servicios';
import Novedades from "./pages/Novedades";
import Contacto from "./pages/Contacto";
import Galeria from './pages/Galeria';


function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/Nosotros" exact element={<Nosotros/>} />
        <Route path="/Servicios" exact element={<Servicios/>} />
        <Route path="/Novedades" exact element={<Novedades/>} />
        <Route path="/Galeria" exact element={<Galeria/>} />
        <Route path="/Contacto" exact element={<Contacto/>} />
      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;
