import React from "react";
import Botones_enlaces from './Botones_enlaces.js';
import '../hojas-de-estilo/Menu.css'
import {Link} from 'react-router-dom';




function Menu_inicio(){
    return(
        
        <div className="contenedor-menu">
            <div className="contenedor-menu--Titulo">
                <Link className='enlaces' to="/">
                    <h1 className='titulo_principal'>Business Inventory AB</h1> 
                </Link>
            </div>

            <Link className="enlaces" to='/Inventario'>
                <Botones_enlaces
                    seccion='Inventario'
                />
            </Link>

            <Link className="enlaces" to='/NavBar'>
                <Botones_enlaces
                    seccion='Ventas'
                />
            </Link>

            <Link className="enlaces" to='/NavBar'>
                <Botones_enlaces
                    seccion='Ayuda'
                />
            </Link>

        </div>
    );
}

export default Menu_inicio;