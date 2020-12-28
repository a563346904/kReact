/*
 * @Author: your name
 * @Date: 2020-12-28 16:38:44
 * @LastEditTime: 2020-12-28 18:06:13
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
        console.log(this.context)
        return (
            <div className={themeColor}>
                ContextTypePage
            </div>
        )
    }
}
