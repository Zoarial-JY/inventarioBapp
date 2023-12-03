import './App.css';
import Inventario from './componentes/Inventario';
//import Botones_enlaces from './componentes/Botones_enlaces.js';
import Menu_inicio from './componentes/Menu_inicio.js';
import NavBar from "./componentes/NavBar.js";
import FormularioInventario from "./componentes/FormularioInventario"
import { Route, Routes } from 'react-router-dom';
import BotonFormularioInv from './componentes/Boton_formularioInv.js';
//react
//tacos
//bots

const MenuInicio = () => <Menu_inicio />

function App() {
  return (
    <div className='App'>
      <header className='contenedor-principal'>
        
      </header>

      <Routes>
        <Route path="/" element={<MenuInicio />}></Route>
        <Route path="/NavBar" element={<NavBar />}></Route>
        <Route path='/Inventario' element={<Inventario />}></Route>
        <Route path='/FormularioInventario' element={<FormularioInventario />}></Route>
        <Route path='/BotonFormularioInv' element={<BotonFormularioInv />}></Route>
      </Routes>
        
      
    </div>


  );
}

export default App;
