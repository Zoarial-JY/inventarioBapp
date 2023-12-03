import React from "react";
import NavBar from './NavBar.js';
import '../hojas-de-estilo/Inventario.css'
import BotonFormularioInv from "./Boton_formularioInv.js";

function Inventario (){
    return(
        <div className="contenedor-inventario">
            <NavBar />

            <h1 className="titulo-inventario">Inventario</h1>

            <section className="contenedor-botFormInv">
                <BotonFormularioInv />
            </section>
        </div>
    )
}

export default Inventario;