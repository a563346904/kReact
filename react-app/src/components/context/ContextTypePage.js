/*
 * @Author: your name
 * @Date: 2020-12-28 16:38:44
 * @LastEditTime: 2021-01-04 17:15:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\context\ContextTypePage.js
 */
import React, { Component } from 'react'
// import { Context } from "../../Context";
import { ConText } from '../../Context'

export default class ContextTypePage extends Component {
    static contextType = ConText;
    render() {
        const { themeColor } = this.context;
        return (
            <div className={themeColor}>
                ContextTypePage
            </div>
        )
    }
}
