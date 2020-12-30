<!--
 * @Author: your name
 * @Date: 2020-12-30 14:54:01
 * @LastEditTime: 2020-12-30 15:27:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react基础\08react-router.MD
-->
#### react-router

#### 资源
1. [react-router](https://reactrouter.com/web/guides/quick-start)
2. [react-router中文文档](https://react-guide.github.io/react-router-cn/index.html)

---

#### react-router
react-router包含3个库,`react-router`, `react-router-dom`和`react-router-native`。react-router提供最基本的路由功能,实际使用的时候我们不会直接安装react-router,而是根据应用运行的环境选择安装react-router-dom(在浏览器中使用)或react-router-native(在rn中使用).react-router-dom和react-router-native都依赖react-router,所以在安装时,react-router也会自动安装,创建web应用,使用:

#### 安装
```
npm install --save react-router-dom
```

#### 基本使用
react-router中风行一切皆组件的思想,路由器-Router,链接-link,路由-Route,独占-Switch,重定向-Redirect都以组件形式存在

#### Route渲染内容的三种方式
Route渲染优先级: children > component > children  
三种方式互斥, 只能使用一种

> children: func
有时候,不管location是否匹配,都需要渲染一些内容,这时候可以使用children,除了不管location是否匹配都会渲染之外,其他工作方法与render完全一样

> render： func
但是当用render的时候,你调用的只是个函数,只在当前location匹配的时候使用

> component 值在当前location匹配的时候渲染

#### 404页面
设定一个没有path的路由在路由列表最后面,表示一定匹配
```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class ReactRouterPage extends Component {
    render() {
        return (
            <div>
                <h3>ReactRouterPage</h3>
                <Router>
                    <Link to="/">首页</Link> | 
                     <Link to="user">用户中心</Link>

                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route path="/user" component={UserPage}></Route>
                        <Route render={() => <div>404</div>}></Route>
                    </Switch>
                    
                </Router>
            </div>
        )
    }
}

class HomePage extends Component {
    render() {
        return (
            <div>
                <h5>HomePage</h5>
            </div>
        )
    }
}

class UserPage extends Component {
    render() {
        return (
            <div>
                <h5>UserPage</h5>
            </div>
        )
    }
}

```