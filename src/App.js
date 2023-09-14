import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='contenedor'>
        <h1 className='titulo'>Business Inventory AB</h1>
        <ul className='centrar menu-lista'>
          <li className='opciones'>
            <button className='menu-boton' onClick={() => this.handleOptionClick(1)}>Inventario de la Tienda</button>
          </li>
          <li className='opciones'>
            <button className='menu-boton' onClick={() => this.handleOptionClick(2)}>Registro de Ventas</button>
          </li>
          <li className='opciones'>
            <button className='menu-boton' onClick={() => this.handleOptionClick(3)}>Ayuda y Soporte</button>
          </li>
        </ul>
      </div>
    
  );
}

export default App;
