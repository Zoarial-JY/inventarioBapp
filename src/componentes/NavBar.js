import React from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/NavBar.css'

function NavBar (){
    return (
        <div className="contenedor-nav">
            <nav className="nav-bar color-fondo">
                <ul className="nav-bar--enlaces sin-puntos">
                    <Link className='enlaces enlaces-nav' to="/">
                        <li className="enlaces-nav--botones">BIAB</li>
                    </Link>
                    <Link className='enlaces enlaces-nav' to="/">
                        <li className="enlaces-nav--botones">Inventario</li>
                    </Link>
                    <Link className='enlaces enlaces-nav' to="/">
                        <li className="enlaces-nav--botones">Ventas</li>
                    </Link>  
                    <Link className='enlaces enlaces-nav' to="/">
                        <li className="enlaces-nav--botones">Ayuda</li>
                    </Link>    
                </ul>
            </nav>

        </div>
    )
}

export default NavBar;