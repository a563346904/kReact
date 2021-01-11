<!--
 * @Author: your name
 * @Date: 2021-01-06 10:26:38
 * @LastEditTime: 2021-01-06 10:27:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react基础\12自定义Hook与Hook使用规则.MD
-->
#### 自定义Hook与Hook使用规则
#### 资源
1. [自定义Hook](https://zh-hans.reactjs.org/docs/hooks-custom.html)
2. [Hook规则](https://zh-hans.reactjs.org/docs/hooks-rules.html)

#### 自定义Hook
有时候我们会想要在组件之间重用一些状态逻辑,目前为止,有两种主流方案来解决这个问题: [高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)和[render props](https://zh-hans.reactjs.org/docs/render-props.html). 自定义Hook可以让你在不增加组件的情况下达到同样的目的

##### 自定义Hook是一个函数,其名称以"use"开头,函数内部可以调用其他的Hook

#### Hook使用规则
Hook就是JavaScript函数,但是使用它们会有两个额外的规则

- 只能在函数最外层调用Hook.不要在循环,条件判断或者子函数中调用
- 只能在React的函数组件中调用Hook.不要再其他的JavaScript函数调用