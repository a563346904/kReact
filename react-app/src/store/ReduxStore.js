/*
 * @Author: your name
 * @Date: 2020-12-28 14:39:19
 * @LastEditTime: 2020-12-30 14:49:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\kReact\react-app\src\store\ReduxStore.js
 */
// import { createStore, applyMiddleware } from '../kredux/'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import logger from "redux-logger";

const counterReducer = ( state = 10, action ) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'MINUS':
            return state - 1
        default:
            return state
            // break;
    }
}

const store = createStore(counterReducer, applyMiddleware(thunk, logger))

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


export default store