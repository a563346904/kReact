/*
 * @Author: your name
 * @Date: 2020-12-28 14:37:12
 * @LastEditTime: 2020-12-28 16:59:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\kReact\react-app\src\pages\HelloWord.js
 */
import React from 'react'
import ReduxPage from '../components/ReduxPage';
import ContextPage from '../components/ContextPage';

export default function HelloWord() {
    return (
        <div>
            hello
            <ReduxPage></ReduxPage>
            <ContextPage></ContextPage>
        </div>
    )
}
