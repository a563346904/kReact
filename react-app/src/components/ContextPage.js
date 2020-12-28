/*
 * @Author: your name
 * @Date: 2020-12-28 16:33:10
 * @LastEditTime: 2020-12-28 18:19:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\ContextPage.js
 */
import React, { Component } from 'react'
import { ConText } from '../Context'
import ContextTypePage from './context/ContextTypePage'
import UseContextPage from './context/UseContextPage';
import ConsumerPage from './context/ConsumerPage';

export default class ContextPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: { themeColor: "red" }
        }
    }
    render() {
        const { theme } = this.state;
        return (
            <div>
                <ConText.Provider value={theme}>
                    <ContextTypePage></ContextTypePage>
                    <UseContextPage></UseContextPage>
                    <ConsumerPage></ConsumerPage>
                </ConText.Provider>
            </div>
        )
    }
}
