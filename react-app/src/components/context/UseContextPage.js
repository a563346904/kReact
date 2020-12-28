/*
 * @Author: your name
 * @Date: 2020-12-28 18:08:42
 * @LastEditTime: 2020-12-28 18:11:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\context\UseContextPage.js
 */
import React from 'react'
import { ConText } from '../../Context';

export default function UseContextPage() {
    const theme = React.useContext(ConText)
    return (
        <div>
            <p className={theme.themeColor}>UseContextPage</p>
        </div>
    )
}
