<!--
 * @Author: your name
 * @Date: 2020-12-30 14:16:22
 * @LastEditTime: 2020-12-30 14:52:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react基础\07react-redux.MD
-->
#### react-redux

#### 安装
```
npm install react-redux --save
```

#### 使用react-redux
react-redux提供了两个api
1. Provider为后代组件提供store
2. connect为组件提供数据和变更方法

```javascript
import React, { Component } from "react";
import { connect } from "react-redux";
class ReactReduxPage extends Component {
    render() {
        const { num, add, minus } = this.props;
        return (
            <div>
                <h1>ReactReduxPage</h1>
                <p>{num}</p>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus2</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        num: state,
    };
};
const mapDispatchToProps = {
    add: () => {
        return { type: "ADD" };
    },
    minus: () => {
        return { type: "minus" };
    }
};
export default connect(
    mapStateToProps, //状态映射 mapStateToProps
    mapDispatchToProps, //派发事件映射
)(ReactReduxPage); 
``
