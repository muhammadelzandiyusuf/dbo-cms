import { combineReducers, createStore, thunk, applyMiddleware, compose } from 'libraries';
import customerReducer from "./customer/reducer";
import toggleMenuReducer from "./menu/reducer";
import supplierReducer from "./supplier/reducer";

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : null) || compose;

/**
 * reducer
 */
export const reducer = combineReducers({
    customer: customerReducer,
    menu: toggleMenuReducer,
    supplier: supplierReducer
});

/**
 * store
 */
export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

/**
 * dispatcher
 */
export * from './customer/action';
export * from './menu/action';
export * from './supplier/action';

/**
 * selector
 */
export * from './customer/selector';
export * from './menu/selector';
export * from './supplier/selector';