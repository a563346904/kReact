/*
 * @Author: your name
 * @Date: 2021-01-08 15:30:09
 * @LastEditTime: 2021-01-08 17:14:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\kreactRouterDom\Route.js
 */
import React, { Component } from 'react'
import RouterContext from './RouterContext';
import { matchPath } from 'react-router/cjs/react-router';

export default class Route extends Component {
    
    render() {
        return <RouterContext.Consumer>
            {
                (context) => {
                    const {location} = context
                    const { path, children, component, render, computedMatch } = this.props;
                    const match = computedMatch 
                        ? computedMatch 
                        : path
                        ? matchPath(location.pathname, this.props) //matchPath(location.pathname, this.props)
                        : context.match
                        // match children(func, 节点) component render null
                    // 不match children(func)

                    const props = {
                        ...context,
                        match
                    }

                    return match
                    ? children 
                        ? typeof children === 'function'
                            ? children(props)
                            : children
                        : component
                        ? React.createElement(component, props)
                        : render
                        ? render(props)
                        : null    
                    : typeof children === 'function' 
                    ? children() 
                    : null
                    
                    return match ?
                            React.createElement(component) :
                            null
                }
            }
        </RouterContext.Consumer>
        
    }
}
