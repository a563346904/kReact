/*
 * @Author: your name
 * @Date: 2020-12-28 14:37:12
 * @LastEditTime: 2021-01-04 17:13:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\kReact\react-app\src\pages\HelloWord.js
 */
import React from 'react'
import ReduxPage from '../components/ReduxPage';
import ContextPage from '../components/ContextPage';
import ReactReduxPage from '../components/ReactReduxPage';
import ReactRouterPage from '../components/ReactRouterPage';
import PurecomponentPage from '../components/PurecomponentPage';
import HookPage from '../components/HookPage';
import LifeCyclePage from '../components/LifeCyclePage';

export default function HelloWord() {
    return (
        <div>
            hello
            <ReduxPage></ReduxPage>
            <ContextPage></ContextPage>
            <ReactReduxPage></ReactReduxPage>
            <ReactRouterPage></ReactRouterPage>
            <LifeCyclePage></LifeCyclePage>
            <PurecomponentPage></PurecomponentPage>
            <HookPage></HookPage>
        </div>
    )
}
