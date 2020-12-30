/*
 * @Author: your name
 * @Date: 2020-12-28 15:25:03
 * @LastEditTime: 2020-12-29 17:03:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\kredux\createStore.js
 */
export default function createStore(reducer, enhancer) {
    if(enhancer) {
        // 加强
        return enhancer(createStore)(reducer);
    }
    let state, listenerArr = [];

    // state = reducer(state, {})
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

    // 手动执行一次dispatch 赋初始值
    dispatch({type: "REUDX/AAAAAAAAAAAAAAAAAAAAAAA"});

    return {
        getState,
        dispatch,
        subscribe
    }
}