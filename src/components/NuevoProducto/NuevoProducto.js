import React from 'react';

//Redux
import {connect} from 'react-redux'
import {agregarProducto} from '../Actions/productosActions'

class NuevoProducto extends React.Component {
  static propTypes = {

  }

  state = {
    nombre:'',
    precio:'',
    error: false
  }

  nombreProducto = (e) => {
    console.log(e.target.value);
    this.setState({nombre: e.target.value})
  }
  
  precioProducto = (e) =>{
    console.log(e.target.value);
    this.setState({precio: e.target.value})
  }

  nuevoProducto = e => {
    e.preventDefault();

    const {nombre, precio} = this.state;

    // console.log(this.props);
    
    if ( nombre === '' || precio === '') {
      this.setState({error: true})
      return;
    }
    
    this.setState({error:false})
    
    const infoProducto ={
      nombre,
      precio
    }
    this.props.agregarProducto(infoProducto)
    
    this.props.history.push('/')
  }
  render = () => {
    const {error} = this.state;

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Agregar Nuevo Producto</h2>
              <form onSubmit={this.nuevoProducto}>
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" onChange={this.nombreProducto} className="form-control" placeholder="Nombre"/>
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input type="number" onChange={this.precioProducto} className="form-control" placeholder="Precio"/>
                </div>
                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
              </form>
              {error ? <div className="alert alert-danger mt-2">Todos los campos son requeridos!</div> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {agregarProducto})(NuevoProducto);
