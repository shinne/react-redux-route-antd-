import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ListDemo from './ListDemo'

export default class About extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <div>I am about</div>
                <ul>
                    <li><Link to="/about/about2">About2 click</Link></li>
                    <li><Link to="/about/about3" inbox>About3 click</Link></li>
                </ul>
                <Route path="/about/about2" component={ListDemo}></Route>
                <Route path="/about/about3">I am about 3</Route>
            </div>)
    }
}