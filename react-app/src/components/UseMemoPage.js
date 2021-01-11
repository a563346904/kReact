import React, { useState, useCallback, memo } from 'react'

export default function UseMemoPage() {
    const [ count, setCount ] = useState(0)
    const [ value, setValue ] = useState('')

    // const expensive = useMemo( () => {
    //     console.log('compute')
    //     let sum = 0;
    //     for (let index = 0; index < count; index++) {
    //         sum+=index
    //     }
    //     return sum
    // }, [count])

    const expensive = useCallback( () => {
        console.log('compute')
        let sum = 0;
        for (let index = 0; index < count; index++) {
            sum+=index
        }
        return sum
    }, [count])
    return (
        <div>
            <p>UseMemoPage</p>
            <p>{expensive()}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>++</button>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <Child onClick={expensive}></Child>
        </div>
    )
}

// function Child(props) {
//     const { onClick } = props;
//     return (
//         <div>
//             Child Page {onClick()}
//         </div>
//     ) 
// }

const Child = memo((props) => {
    console.log('props', props)
    const { onClick } = props;
    return (
        <div>
            Child Page {onClick()}
        </div>
    )
})
