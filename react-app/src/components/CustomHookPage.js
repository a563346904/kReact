/*
 * @Author: your name
 * @Date: 2021-01-06 10:27:10
 * @LastEditTime: 2021-01-06 10:31:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\CustomHookPage.js
 */
import React, { useState, useEffect,  } from 'react'

export default function CustomHookPage() {
    const [ count, setCount ] = useState(0)
    

    useEffect(() => {
        document.title = `You Click ${count} times`
    })

    
    return (
        <div>
            <h3>CustomHookPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>++</button>
            <p>{useClock().toLocaleTimeString()}</p>
        </div>
    )
}

// 自定义Hook, 命名要以use开头
function useClock(params) {
    const [ date, setDate ] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [date])

    return date
}
