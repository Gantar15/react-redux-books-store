import {createStore, applyMiddleware, compose} from 'redux';

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

const logMiddleware = ({getState, dispatch}) => next => action => {
    console.log(action.type, getState());
    next(action);
};
const store = createStore(reducer, compose(actionDetectEnhancer, applyMiddleware(logMiddleware)));

export default store;