import React from 'react';
import styles from './Header.css';

//React router
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-darg bg-primary justify-content-between d-flex">
    <h1>
      <Link to={'/'} className="text-light">CRUD - React, Redux, REST API & Axios</Link>
    </h1>

    {/* <button  type="button" className="btn btn-danger nuevo-post">Agregar Producto &#43;</button> */}
    <Link to ={'/productos/nuevo'} className="btn btn-danger nuevo-post">
      Agregar Producto &#43;
    </Link>
  </div>
);

Header.propTypes = {

};

export default Header;
