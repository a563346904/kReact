<!--
 * @Author: your name
 * @Date: 2021-01-06 15:02:35
 * @LastEditTime: 2021-01-08 10:06:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react基础\14传送门CreatePortal.MD
-->
#### createPortal

```javascript
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
```
