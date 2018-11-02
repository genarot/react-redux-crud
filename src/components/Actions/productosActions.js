import {AGREGAR_PRODUCTO, EDITAR_PRODUCTO, BORRAR_PRODUCTO, MOSTRAR_PRODUCTO, MOSTRAR_PRODUCTOS} from './types';

import axios from 'axios';

//dispatch esta presente debido al thunk middleware
export const  mostrarProductos =  ( ) => async dispatch => {
    const response = await axios.get('http://localhost:5000/productos');

    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: response.data
    })
} 

export const  mostrarProducto =  ( id ) => async dispatch => {
    const response = await axios.get(`http://localhost:5000/productos/${id}`);

    dispatch({
        type: MOSTRAR_PRODUCTO,
        payload: response.data
    })
} 

export const borrarProducto = (id ) => async dispatch => {
    const response = await axios.delete(`http://localhost:5000/productos/${id}`);

    console.log(response);
    dispatch({
        type: BORRAR_PRODUCTO,
        payload: id
    })
}

export const agregarProducto    = producto => async dispatch => {
    const response = await axios.post('http://localhost:5000/productos',producto);

    console.log(response);
    dispatch({
        type: AGREGAR_PRODUCTO,
        payload: response.data
    })
}

export const actualizarProducto = producto => async dispatch => {
    const response = await axios.put(`http://localhost:5000/productos/${producto.id}`, producto);

    console.log('payload', response.data);
    
    dispatch({
        type: EDITAR_PRODUCTO,
        payload: response.data
    })
}