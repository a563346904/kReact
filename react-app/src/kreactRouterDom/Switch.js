/*
 * @Author: your name
 * @Date: 2021-01-08 16:51:43
 * @LastEditTime: 2021-01-08 17:03:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\kreactRouterDom\Switch.js
 */
import React, { Component } from 'react'
import RouterContext from './RouterContext';
import { matchPath } from 'react-router/cjs/react-router';

export default class Switch extends Component {
    render() {
        return (
            <RouterContext.Provider>
                {
                    context => {
                        const { location } = context
                        let match;
                        let element;

                        React.Children.forEach(this.props.children, child => {
                            if(match == null) {
                                element = child
                                match = matchPath(location.pathname, child.props)
                            }
                        })

                        return match ? React.cloneElement(element, {computedMatch: match}) : null
                    }
                }
            </RouterContext.Provider>
        )
    }
}
