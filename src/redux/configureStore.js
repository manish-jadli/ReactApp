import {createStore, applyMiddleware,compose} from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvarient from "redux-immutable-state-invariant";

export default function configureStore(initialState){
    const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxImmutableStateInvarient()))
    );
}