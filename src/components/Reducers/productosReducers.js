import {MOSTRAR_PRODUCTO, MOSTRAR_PRODUCTOS, EDITAR_PRODUCTO, AGREGAR_PRODUCTO, BORRAR_PRODUCTO} from '../Actions/types';

const initialState ={
    productos: []
}

export default function( state  = initialState, action ) {
    switch( action.type) {
        case MOSTRAR_PRODUCTO:
            
        case MOSTRAR_PRODUCTOS:
            return{
                ...state, 
                productos: action.payload
            }
        case BORRAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id != action.payload)
            }
        default:
            return state;
    }
}