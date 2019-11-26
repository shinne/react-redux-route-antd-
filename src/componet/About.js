import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ListDemo from './ListDemo'
import {connect} from 'react-redux'
import actions from '../actions/aboutAction'

class About extends React.Component {
    constructor() {
        super()
    }

    addIndex() {
        console.log('sss')
        this.props.dispatch(actions.addPageIndex())
    }

    render() {
        const {index, name} = this.props.about
        return (
            <div>
                <div>I am about</div>
                <ul>
                    <li><h3>name:{name},index:{index},<span onClick={() => {
                        this.addIndex()
                    }}>ADD INDEX</span></h3></li>
                    <li><Link to="/about/about2">About2 click</Link></li>
                    <li><Link to="/about/about3" inbox>About3 click</Link></li>
                </ul>
                <Route path="/about/about2" component={ListDemo}></Route>
                <Route path="/about/about3">I am about 3</Route>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        about: state.aboutReducer
    }
}
export default connect(mapStateToProps)(About);