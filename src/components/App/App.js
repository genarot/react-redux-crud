import React, { Component } from 'react';
import './App.css';
//components
import Productos from '../Productos/Productos';
import NuevoProducto from '../NuevoProducto/NuevoProducto';
import EditarProducto from '../EditarProducto/EditarProducto';

//React router
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

//Redux
import {Provider} from 'react-redux';
import store  from '../Store'
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <React.Fragment>
          <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Productos}/>
                <Redirect exact from="/productos" to="/" />
                <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                <Route exact path="/productos/editar/:id" component={EditarProducto}/>
              </Switch>
            </div>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
