import React from 'react';

//Redux
import {connect} from 'react-redux'
import {mostrarProducto, actualizarProducto} from '../Actions/productosActions'

class EditarProducto extends React.Component {
  static propTypes = {

  }

  state = {
    id:   '',
    nombre:'',
    precio:'',
    error: false
  }
  componentDidMount() {
    // console.log(this.props);
    const {id} = this.props.match.params;
    this.props.mostrarProducto(id)
  }
  nombreProducto = (e) => {
    // console.log(e.target.value);
    this.setState({nombre: e.target.value})
  }
  
  precioProducto = (e) =>{
    console.log(e.target.value);
    this.setState({precio: e.target.value})
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('prevState',prevState);
    // console.log('nextProps',nextProps);
    
    if ( nextProps.producto && (prevState.id !== nextProps.producto.id) ) {
      const {id, nombre, precio} = nextProps.producto;
      return {
        id,
        nombre,
        precio
      }
    }
    return null;
  }
  

  nuevoProducto = e => {
    e.preventDefault();

    const {id, nombre, precio} = this.state;

    // console.log(this.props);
    
    if ( nombre === '' || precio === '') {
      this.setState({error: true})
      return;
    }
    
    this.setState({error:false})
    
    const infoProducto ={
      id,
      nombre,
      precio
    }
    this.props.actualizarProducto(infoProducto)
    
    this.props.history.push('/')
  }
  render = () => {
    const {error, nombre, precio} = this.state;

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Editar Producto</h2>
              <form onSubmit={this.nuevoProducto}>
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" value={nombre}  onChange={this.nombreProducto} className="form-control" placeholder="Nombre"/>
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input type="number" value={precio} onChange={this.precioProducto} className="form-control" placeholder="Precio"/>
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

const mapStateToProps = (state) => ({
  producto: state.productos.producto
})

export default connect(mapStateToProps, {mostrarProducto, actualizarProducto})(EditarProducto);
