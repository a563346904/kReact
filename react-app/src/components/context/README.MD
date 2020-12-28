<!--
 * @Author: your name
 * @Date: 2020-12-28 16:29:31
 * @LastEditTime: 2020-12-28 18:30:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\context.js\README.MD
-->
#### 组件跨层级通信Context

#### 使用场景
- 很多层级都需要共享
- 数据一旦发生变化,所有的子组件都需要进行更新

#### 如何使用Content
1. 创建一个context对象
2. 创建Provider,传递value
3. 子组件消费Value
- 通过contextType
- useContext

##### 总结
- contextType 只能用在类组件,只能定义单一的context来源

- useContext只能用在函数组件或者自定义hook中

- consumer 不限制函数组件或者类组件
