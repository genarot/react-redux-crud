import {AGREGAR_PRODUCTO, EDITAR_PRODUCTO, BORRAR_PRODUCTO, MOSTRAR_PRODUCTO, MOSTRAR_PRODUCTOS} from './types';

import axios from 'axios';

//dispatch esta presente debido al thunk middleware
export const  mostrarProductos =  ( ) => async dispatch => {
    const respuesta = await axios.get('http://localhost:5000/productos');

    dispatch({
        type: MOSTRAR_PRODUCTO,
        payload: respuesta.data
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