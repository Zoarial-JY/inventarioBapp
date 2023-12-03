import React from "react";
import '../hojas-de-estilo/FormularioInventario.css'

/*script*/

function FormularioInventario (){
    return(
        <div className="contenedor_formularioInventario">
            <form className="formulario" id="formularioInventario" onSubmit={this.manejarEnvioFormulario}>
                <fieldset className="formulario-inventario">
                    <legend className="formulario-inventario-legend">Formulario</legend>

                    <div className="contenedor_campos">

                        <div className="campo">
                            <label>Nombre</label>
                            <input
                                type="text" 
                                placeholder="Nombre del producto"
                                name="nombre"
                                value={this.state.nombre}
                                onChange={this.manejarCambioCampo} 
                            />
                        </div>

                        <div className="campo">
                            <label>Precio</label>
                            <input
                                type="number" 
                                step="0.01" 
                                min="0" 
                                placeholder="Precio del producto"
                                name="precio"
                                value={this.state.precio}
                                onChange={this.manejarCambioCampo} 
                            />
                        </div>

                        <div className="campo campo-tresColumnas">
                            <label for="casilla_opciones-medida">Medida</label>
                            <input 
                                type="number" 
                                step="0.01" 
                                min="0" 
                                placeholder="Medida del producto" 
                                name="medida"
                                value={this.state.medida}
                                onChange={this.manejarCambioCampo}     
                            />
                            <select id="casilla_opciones-medida" name="medidaSelect" value={this.state.medidaSelect} onChange={this.manejarCambioCampo}  >
                                <option value="0" disabled selected>-- Seleccione la medida --</option>
                                <option value="1" title="Gramos">gr</option>
                                <option value="2" title="Kilogramos">kg</option>
                                <option value="3" title="Mililitros">ml</option>
                                <option value="4" title="Litros">lt</option>
                            </select>
                        </div>

                        <div className="campo">
                            <label>Cantidad</label>
                            <input 
                                type="number" 
                                placeholder="Cantidad de productos" 
                                name="cantidad"
                                value={this.state.cantidad}
                                onChange={this.manejarCambioCampo}  
                            />
                        </div>

                        <div className="campo">
                            <label for='casilla_opciones-categoria'>Categoria</label>
                            <select id="casilla_opciones-categoria" name="categoria" value={this.state.categoria} onChange={this.manejarCambioCampo}>
                                <option value="0" disabled selected>-- Seleccione la categoria del producto --</option>
                                <option value="1">Bebidas</option>
                                <option value="2">Frituras</option>
                                <option value="3">Abarrotes</option>
                                <option value="4">Otros</option>
                            </select>
                        </div>

                        <div className="campo">
                            <label>Fecha de caducidad</label>
                            <input 
                                className="campo-fc" 
                                type="date" 
                                placeholder="Fecha de caducidad del producto" 
                                name="fechaCaducidad"
                                value={this.state.fechaCaducidad}
                                onChange={this.manejarCambioCampo}      
                            />
                        </div>

                        <div className="campo">
                            <label>Agregar imagen</label>
                            <input 
                                className="input-imagen" 
                                type="file"
                                name="imagen"
                                value={this.state.imagen}
                                onChange={this.manejarCambioCampo}      
                            />
                        </div>

                        <div class="agregar">
                            <input type="submit" value="Agregar" />                 
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default FormularioInventario;

