import React, { useState, useEffect } from 'react'

export default function HookPage() {
    const [ count, setCount ] = useState(0)
    const [ date, setDate ] = useState(new Date())

    useEffect(() => {
        document.title = `You Click ${count} times`
    })

    useEffect(() => {
        var timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [date])
    return (
        <div>
            <h3>HookPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>++</button>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}
