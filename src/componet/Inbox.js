import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import actions from '../actions/inboxAction'

class Inbox extends React.Component {
    constructor(){
        super()
    }

    addIndex(){
        this.props.dispatch(actions.asyncAddPageIndex())
    }

    render() {
        const {name , index} = this.props
        return (
            <div>
                <div><span>I am {name} page,index:{index}</span></div>
                <div onClick={() => this.addIndex()}>u can click me to add index, it uses redux-thunk</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.inboxReducer.name,
        index: state.inboxReducer.index
    }
}

export default connect(mapStateToProps)(Inbox)
