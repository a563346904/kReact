/*
 * @Author: your name
 * @Date: 2021-01-08 15:33:19
 * @LastEditTime: 2021-01-11 09:32:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\kReactRouterPage.js
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from '../kreactRouterDom'

export default function KReactRouterPage() {
    return (
        <div>
            <Router>
                <Link to="/">首页</Link> | 
                <Link to="user">用户中心</Link>
                <Route exact path="/" component={HomePage} ></Route>
                <Route path="/user" component={UserPage}></Route>
                <Route render={() => <div>404</div>}></Route>
            </Router>
        </div>
    )
}

class HomePage extends Component {
    render() {
        return (
            <div>
                <h5>HomePage</h5>
            </div>
        )
    }
}

class UserPage extends Component {
    render() {
        return (
            <div>
                <h5>UserPage</h5>
            </div>
        )
    }
}

// function children() {
//     return (
//         <div>children</div>
//     )
// }
