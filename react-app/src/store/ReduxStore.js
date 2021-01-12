/*
 * @Author: your name
 * @Date: 2020-12-28 14:39:19
 * @LastEditTime: 2021-01-11 10:47:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\kReact\react-app\src\store\ReduxStore.js
 */
// import { createStore, applyMiddleware } from '../kredux/'
import { createStore, applyMiddleware, combineReducers } from 'redux'
// import createSagaMiddleware from "redux-saga";
import { loginReducer } from './loginReducer'

// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import mySaga from './mySaga';

// const counterReducer = ( state = 10, action ) => {
//     switch (action.type) {
//         case 'ADD':
//             return state + 1
//         case 'MINUS':
//             return state - 1
//         default:
//             return state
//             // break;
//     }
// }
// const sagaMiddleware = createSagaMiddleware;
// const store = createStore(counterReducer, applyMiddleware(thunk, logger))
// sagaMiddleware.run(mySaga)


const store = createStore(combineReducers({user: loginReducer}))



export default store

// function thunk({dispatch, getState}) {
//     return next => action => {
//         if(typeof action === 'function') {
//             return action(dispatch, getState)
//         }
//         return next(action)
//     }
// }

// function logger({dispatch, getState}) {
//     return (next) => (action) => {
//         console.log('-----------')

//         let prevState = getState();
//         console.log('prev state', prevState)
//         const returnValue = next(action)
//         let nextState = getState()
//         console.log('next state', nextState)
//         console.log('-----------')

//         return returnValue
//     }
// }