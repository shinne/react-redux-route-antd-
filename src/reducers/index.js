import {combineReducers} from 'redux'
import aboutReducer from './aboutReducer'
import inboxReducer from './inboxReducer'

export default combineReducers({
    aboutReducer,
    inboxReducer
})