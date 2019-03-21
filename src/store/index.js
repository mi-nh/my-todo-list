import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/index";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, /* preloadedState, */
    storeEnhancers(applyMiddleware())
);

export default store;