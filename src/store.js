import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';


const actionDetectEnhancer = createStore => (...args) => {
    const store = createStore(...args);

    const originalDispatch = store.dispatch;
    store.dispatch = action => {
        console.log('some action');
        originalDispatch(action);
    };
    return store;
};

const logMiddleware = ({getState}) => next => action => {
    console.log(action.type, getState());
    next(action);
};

const store = createStore(reducer, compose(actionDetectEnhancer, 
    applyMiddleware(thunkMiddleware, logMiddleware)));

const delayActionCreator = (timeout=0) => dispatch => {
    setTimeout(() => dispatch({type: 'DELAY_ACTION'}), timeout);
};
store.dispatch(delayActionCreator(2000));

export default store;