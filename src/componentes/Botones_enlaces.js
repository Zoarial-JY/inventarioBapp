import React from "react";
import '../hojas-de-estilo/Botones_enlaces.css'
//import { Route } from 'react-router-dom';


function Botones_enlaces(props) {
  return (
    <div className="contenedor-botones_enlaces">
      <button className='menu-boton'><span>{props.seccion}</span></button>
    </div>
  );
}

export default Botones_enlaces;