/*
 * @Author: your name
 * @Date: 2020-12-28 14:39:19
 * @LastEditTime: 2020-12-28 16:01:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\kReact\react-app\src\store\ReduxStore.js
 */
// import { createStore } from 'redux'

import { createStore } from '../kredux/'

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

const store = createStore(counterReducer)

export default store