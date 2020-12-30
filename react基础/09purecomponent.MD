#### purecomponent

#### 资源
1. [React.PureComponent](https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent)

#### 知识要点
##### 实现性能优化
定制了shouldComponentUpdate后的Component
```javascript
import React, {  PureComponent } from 'react'

export default class PurecomponentPage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    
    setValue = () => {
        this.setState({ count: 100 })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.count !== this.state.count
    // }

    render() {
        console.log('render')
        const { count } = this.state
        return (
            <div>
                <h5>Purecomponent</h5>
                <p>{ count }</p>
                <button onClick={this.setValue}>setValue</button>                
            </div>
        )
    }
}
```

#### 浅比较
缺点时必须要使用class形式, 而且要注意时浅比较

#### 与Component比较
`React.PureCompenent`与`React.Component`很相似,两者的区别在于`React.Component`并未实现`shouldComponentUpdate()`,而`React.PureComponent`中浅层对比prop和state的方式来实现了该函数。  
如果赋予React组件相同的props和state,`render()`函数会渲染相同的内容,那么在某些情况下使用`React.PurComponent`可提高性能
> 注意
>React.PureComponent中的shouldComponentUpdate()仅作对象的浅层比较.如果对象中包含复杂的数据结构,则有可能因为无法检查深层的差别,产生错误的比对结果.仅在你的props和state较为简单时,才使用React.PureComponent,或者在深层数据结构发生变化时调用[forceUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#forceupdate)来确保组件被正确的更新.你也可以考虑使用[immutable对象](https://immutable-js.github.io/immutable-js/)加速嵌套数据的比较

> 此外, React.PureComponent中的shouldComponentUpdate()将跳过所有子组件树的prop更新.因此确保所有子组件也都是"纯"的组件