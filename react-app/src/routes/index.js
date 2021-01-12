/*
 * @Author: your name
 * @Date: 2021-01-11 10:47:45
 * @LastEditTime: 2021-01-11 14:39:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\routes\index.js
 */
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import _404Page from "../pages/_404Page";
import PrivateRoute from './PrivateRoute';

export const routes = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        path: "/user",
        component: UserPage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/404",
        component: _404Page
    }
]

export default function Routes() {
    return (
        <Router>
            <Link to="/">首页</Link><br/>
            <Link to="/user">用户中心</Link><br/>
            <Link to="/login">登录</Link>

            <Switch>
                <Route exact path="/" component={HomePage} ></Route>
                <Route path="/login" component={LoginPage} ></Route>
                {/* <Route path="/user" component={UserPage}></Route> */}
                <PrivateRoute path="/user" component={UserPage} ></PrivateRoute>
                <Route component={_404Page} ></Route>

                {/* <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/user" component={UserPage} />
                <PrivateRoute path="/user" component={UserPage} />
                <Route component={_404Page} /> */}
            </Switch>
        </Router>
    )
}

