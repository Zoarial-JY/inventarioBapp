import React, { Component } from 'react';
import FormularioInventario from './FormularioInventarioCompletado.js';
import '../hojas-de-estilo/Boton_formularioInv.css'

class BotonFormularioInv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formularioVisible: false,
      nombre: "",
      precio: "",
      medida: "",
      medidaSelect: "",
      cantidad: "",
      categoria: "",
      fechaCaducidad: "",
      imagen: "",
      datosEnviados: false,
    };
  }

  mostrarFormulario = () => {
    this.setState({ formularioVisible: true });
  };

  manejarEnvioFormulario = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    this.setState({ datosEnviados: true });
  };

  manejarCambioCampo = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="contenedor_formularioInventarioCompletado">

        {this.state.formularioVisible && !this.state.datosEnviados && (
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
                          <option value="gr" title="Gramos">gr</option>
                          <option value="kg" title="Kilogramos">kg</option>
                          <option value="ml" title="Mililitros">ml</option>
                          <option value="lt" title="Litros">lt</option>
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
                          <option value="Bebidas">Bebidas</option>
                          <option value="Frituras">Frituras</option>
                          <option value="Abarrotes">Abarrotes</option>
                          <option value="Otros">Otros</option>
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
        )}

        {this.state.datosEnviados && (
          <div>
            <h2>Datos del formulario:</h2>
            <p>Nombre: {this.state.nombre}</p>
            <p>Precio: {this.state.precio}</p>
            <p>Medida: {this.state.medida}</p>
            <p>Unidad de medida: {this.state.medidaSelect}</p>
            <p>Cantidad: {this.state.cantidad}</p>
            <p>Categoria: {this.state.categoria}</p>
            <p>Caducidad: {this.state.fechaCaducidad}</p>
            <p>Imagen: {this.state.imagen}</p>
          </div>
        )}

        {!this.state.formularioVisible && !this.state.datosEnviados && (
          <button onClick={this.mostrarFormulario}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
            </svg>
          </button>
        )}
      </div>
    );
  }
}

export default BotonFormularioInv;
