/*
 * @Author: your name
 * @Date: 2020-12-28 15:25:03
 * @LastEditTime: 2020-12-28 16:08:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\kredux\createStore.js
 */
export default function createStore(reducer) {
    let state, listenerArr = [];

    state = reducer(state, {})
    function getState() {
        return state
    }

    function dispatch(action) {
        state = reducer(state, action)
        listenerArr.forEach(listener => listener())
    }

    function subscribe(listener) {
        listenerArr.push(listener)
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}