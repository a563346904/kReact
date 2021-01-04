#### 认识Hook

#### 资源
1. [Hook简介](https://reactjs.org/docs/hooks-intro.html)
2. Hook视频介绍: [React Today and Tomorrow](https://www.youtube.com/watch?v=V-QO-KO90iQ&t=3060s)

#### 知识要点
##### 认识Hook
`Hook` 是什什么？ Hook 是⼀一个特殊的函数，它可以让你“钩⼊入” React 的特性。例例如， `useState` 是允许
你在 `React` 函数组件中添加 `state` 的 `Hook`。  
什什么时候我会⽤用 `Hook`？ 如果你在编写函数组件并意识到需要向其添加⼀一些 state，以前的做法是必须
将其它转化为 class。现在你可以在现有的函数组件中使⽤用 Hook。

```javascript
import React, { useState } from 'react'

export default function HookPage() {
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <h3>HookPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>++</button>
        </div>
    )
}
```

#### 使用Effect Hook
effect Hook可以让你在函数组件中执行副作用操作
数据获取,设置订阅以及手动更改React组件中的Dom都属于副作用.不管你知不知道这些操作,或者是"副作用"这个名字,应该都在组件中使用过他们

```javascript
import React, { useState, useEffect } from 'react'

export default function HookPage() {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        document.title = `You Click ${count} times`
        // return () => {
        //     cleanup
        // }
    })
    return (
        <div>
            <h3>HookPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>++</button>
        </div>
    )
}
```

> 在函数组件主体内(这里指在React渲染阶段)改变DOM,添加订阅,设置定时器,记录日志以及执行其他包含副作用的操作都是不被允许的,因为这可能会产生莫名其妙的bug并破坏UI的一致性

> 使用useEffect完成副作用操作.赋值给useEffect的函数会在组件渲染到屏幕之后执行.你可以把effect看作从React的纯函数式世界通往命令式时间的逃生通道.

> 默认情况下, effect将在每轮渲染结束后执行,但你可以选择让它 [在只有某些值改变的时候](https://zh-hans.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) 才执行

#### effect的条件执行
默认情况下,effet会在每轮组件渲染后完成后执行.这样的话,一旦effect的依赖发生变化,它就会被重新创建. 然而,在某些场景下这么做可能会矫枉过正,我们不需要在每次组件更新时都创建新的订阅,而是仅需在source props改变时重新创建,要实现这一点,可以给useEffect传递第二个参数,它是effect所依赖的数组

```javascript
import React, { useState, useEffect } from 'react'

export default function HookPage() {
    const [ count, setCount ] = useState(0)
    const [ date, setDate ] = useState(new Date())

    useEffect(() => {
        document.title = `You Click ${count} times`
    }, [count])

    useEffect(() => {
        var timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <h3>HookPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>++</button>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

```
#### 清除 effect
通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器器 ID 等资源。要实现这⼀一点， useEffect
函数需返回⼀一个清除函数，以防⽌止内存泄漏漏，清除函数会在组件卸载前执⾏行行。