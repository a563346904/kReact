/*
 * @Author: your name
 * @Date: 2020-12-30 15:10:58
 * @LastEditTime: 2020-12-30 15:26:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\ReactRouterPage.js
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class ReactRouterPage extends Component {
    render() {
        return (
            <div>
                <h3>ReactRouterPage</h3>
                <Router>
                    <Link to="/">首页</Link> | 
                     <Link to="user">用户中心</Link>

                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route path="/user" component={UserPage}></Route>
                        <Route render={() => <div>404</div>}></Route>
                    </Switch>
                    
                </Router>
            </div>
        )
    }
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

