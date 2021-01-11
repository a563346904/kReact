<!--
 * @Author: your name
 * @Date: 2021-01-06 11:00:26
 * @LastEditTime: 2021-01-06 14:51:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react基础\13HookApi之useMemo与useCallback.MD
-->
#### Hook API之useMemo与useCallback

#### 资源
1. [Hook API 索引](https://zh-hans.reactjs.org/docs/hooks-reference.html)

#### 知识要点
#### useMemo
把"创建"函数和依赖项数组作为参数传入useMemo,它仅会在某个依赖改变时才重新计算memoized值.这种优化有助于避免在每次渲染时都进行高开销的计算

#### useCallback
把内联回调函数及依赖项数组作为参数传⼊ useCallback ，它将返回该回调函数的 memoized 版本，
该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使⽤引⽤相等性去避
免⾮必要渲染（例如 shouldComponentUpdate ）的⼦组件时，它将⾮常有⽤

> 注意
依赖项数组不会作为参数传给“创建”函数。虽然从概念上来说它表现为：所有“创建”函数中引⽤的
值都应该出现在依赖项数组中。未来编译器会更加智能，届时⾃动创建数组将成为可能。