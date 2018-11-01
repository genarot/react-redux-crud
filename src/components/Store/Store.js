import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//Importar reducers 
import reducerPrincipal from '../Reducers';

const initialState = {
};

const middleware = [thunk];

const store = createStore(reducerPrincipal,
                            initialState,
                           compose(applyMiddleware(...middleware),
                           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;