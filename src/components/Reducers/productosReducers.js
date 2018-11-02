import {MOSTRAR_PRODUCTO, MOSTRAR_PRODUCTOS, EDITAR_PRODUCTO, AGREGAR_PRODUCTO, BORRAR_PRODUCTO} from '../Actions/types';

const initialState ={
    productos: []
}

export default function( state  = initialState, action ) {
    switch( action.type) {
        case MOSTRAR_PRODUCTO:
            return {
                ...state,
                producto: action.payload
            }
        case MOSTRAR_PRODUCTOS:
            return{
                ...state, 
                productos: action.payload
            }
        case BORRAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [...state.productos,action.payload]
            }
        case EDITAR_PRODUCTO:
        console.log(action.payload);
        console.log(state.productos)
        console.log(state.productos.filter( producto =>  producto.id === action.payload.id ? action.payload : producto ));
        
            return {
                ...state,
                productos: state.productos.map( producto =>  producto.id === action.payload.id ? action.payload : producto )
            }
        default:
            return state;
    }
}