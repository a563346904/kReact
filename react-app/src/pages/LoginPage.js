import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

@connect(({user}) => ({isLogin: user.isLogin}))
class LoginPage extends Component {
    render() {
        const { isLogin, location, dispatch } = this.props
        const { from = '/' } = location.state || {}

        console.log('isLogin', isLogin)

        // 已经登录了
        if(isLogin) {
            return <Redirect to={from} />
        }

        // 没有登录
        return (
            <div>
                LoginPage
                <button onClick={() => dispatch({type: 'LOGIN_SUCCESS'}) }>登录</button>
            </div>
        )
    }
}

export default LoginPage
