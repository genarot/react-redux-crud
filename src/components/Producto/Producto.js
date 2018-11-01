import React from 'react';
import styles from './Producto.css';
import {Link} from 'react-router-dom'

//Redux
import {connect} from 'react-redux'
import { borrarProducto } from '../Actions/productosActions'

class Producto extends React.Component{
  eliminarProducto( id ) {
    // console.log(this.props);
    console.log('eliminando ',id);
    this.props.borrarProducto(id)
  }

  render()  {
    const {precio, id, nombre} = this.props.info;
    return (<li className="list-group-item list-group-item-action bg-white">
              <div className="row justify-content-between">
                <div className="col-md-8 d-flex justify-content-between align-items-center">
                  {nombre} 
                  <span className="badge badge-warning badge-pill">$ {precio}</span>
                </div>
                <div className="col-md-4 d-flex justify-content-end acciones">
                  <Link to={`productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
                  <button onClick={ () => this.eliminarProducto(id)} type="button" className="btn btn-danger">Eliminar</button>
                </div>
              </div>
            </li>)
  };
}
Producto.propTypes = {

};
const mapStateToProps = (state) => ({
  productos: state.productos.productos
})

export default connect(mapStateToProps,{borrarProducto})(Producto);
