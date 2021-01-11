/*
 * @Author: your name
 * @Date: 2021-01-06 15:03:49
 * @LastEditTime: 2021-01-06 15:16:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\CreatePortal.js
 */
import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export default function CreatePortal() {
    const [flag, setFlag] = useState(true)
    return (
        <div>
            dialog
            <button onClick={() => setFlag(!flag)}>setFlag</button>   
            { flag && <Dialog /> }
        </div>
    )
}

function Dialog() {
    return createPortal(
        (
            <div>
                dialog 
            </div>
        ),
        document.body
    )
}
