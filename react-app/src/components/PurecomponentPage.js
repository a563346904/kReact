/*
 * @Author: your name
 * @Date: 2020-12-30 16:01:50
 * @LastEditTime: 2020-12-30 16:12:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kReact\react-app\src\components\Purecomponent.js
 */
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
