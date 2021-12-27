import { combineReducers, createStore, thunk, applyMiddleware, compose } from 'libraries';
import customerReducer from "./customer/reducer";

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : null) || compose;

/**
 * reducer
 */
export const reducer = combineReducers({
    customer: customerReducer,
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

/**
 * selector
 */
export * from './customer/selector';