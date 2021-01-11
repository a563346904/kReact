/*
 * @Author: your name
 * @Date: 2021-01-08 15:30:29
 * @LastEditTime: 2021-01-08 15:45:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\kreactRouterDom\BrowserRouter.js
 */
import React, { Component } from 'react'
import Router from './Router';
import { createBrowserHistory } from 'history'

export default class BrowserRouter extends Component {
    constructor(props) {
        super(props)
        this.history = createBrowserHistory()
    }
    render() {
        return (
            <Router history={this.history} children={this.props.children}></Router>
        )
    }
}
