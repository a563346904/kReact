import React, { Component } from 'react'
import propTypes from "prop-types"

export default class LifeCyclePage extends Component {
    static defaultProps = {
        msg: "omg"
    }

    static propTypes = {
        msg: propTypes.string //.isRequired
    }

    constructor(props) {
        super(props)
        this.state = { count: 0 }

        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, oldProps) {
        console.log('shouldComponentUpdate')
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        const { count } = this.state
        return (
            <div>
                <h3>LifeCyclePage</h3>
                <p>{count}</p>
                <button onClick={() => this.setState({count: count + 1})}>+</button>
            </div>
        )
    }
}
