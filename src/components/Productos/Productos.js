import React from 'react';
import styles from './Productos.css';

//Redux 
import {connect} from 'react-redux'
import { mostrarProductos } from '../Actions/productosActions'
import store from '../Store';
import Producto from '../Producto/Producto';

class Productos extends React.Component {
  static propTypes = {

  }

  componentDidMount() {

    this.props.mostrarProductos(store.dispatch)
  }
  render = () => {
   console.log(this.props);
    return (
      <React.Fragment>
        <h2 className="text-center my-5">Listado de Productos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-group">
             { 
               this.props.productos.map( producto => <Producto key={producto.id} info={producto}/>) 
              }
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
    productos: state.productos.productos
})
export default connect(mapStateToProps, {mostrarProductos}) (Productos);
