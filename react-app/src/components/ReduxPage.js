/*
 * @Author: your name
 * @Date: 2020-12-28 14:52:19
 * @LastEditTime: 2020-12-30 14:15:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\kReact\react-app\src\components\ReduxPage.js
 */
import React, { Component } from 'react'
import store from '../store/ReduxStore'

export default class ReduxPage extends Component {
    ascAdd = () => {
        store.dispatch((dispatch) => {
            setTimeout(() => {
                dispatch({ type: "ADD" })
            }, 1000);
        })
    }
    render() {
        return (
            <div>
                reduxPage
                <p>{ store.getState() }</p>
                <button onClick={() => store.dispatch({ type: "ADD" })}>添加</button>
                <button onClick={this.ascAdd}>async添加</button>
            </div>
        )
    }
}
