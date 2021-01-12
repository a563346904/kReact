/*
 * @Author: your name
 * @Date: 2021-01-11 11:02:58
 * @LastEditTime: 2021-01-11 14:49:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\routes\PrivateRoute.js
 */
import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

// 在这里做权限,路由守卫
// 常见的权限做法: 一个是弹窗,路由跳转
function PrivateRoute({ isLogin, component: ComponentAAAA, ...restProps }) {
    console.log('restProps',restProps)
    // console.log(Component)
    return (
        <Route
            {...restProps}
            render={(props) => 
                isLogin ? 
                <ComponentAAAA {...props} /> : 
                <Redirect to={{ pathname: "/login", state: { from: props.location && props.location.pathname } }} />}
        />
    )
}

export default connect(({user}) => ({isLogin: user.isLogin}))(PrivateRoute)

// import React from "react";
// import {Redirect, Route} from "react-router-dom";
// import {connect} from "react-redux";

// // 在这里做权限，路由守卫
// // 常见的权限做法：一个是弹窗、路由跳转
// // 以登录为例
// function PrivateRoute({isLogin, component: Component, ...restProps}) {
//   return (
//     <Route
//       {...restProps}
//       render={(props) =>
//         isLogin ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{pathname: "/login", state: {from: props.location.pathname}}}
//           />
//         )
//       }
//     />
//   );
// }
// export default connect(({user}) => ({isLogin: user.isLogin}))(PrivateRoute);
