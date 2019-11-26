import {combineReducers} from 'redux'
// to use immutable ,we need use combineReducers from redux-immutable
// import {combineReducers} from 'redux-immutable'
import aboutReducer from './aboutReducer'
import inboxReducer from './inboxReducer'


export default combineReducers({
    aboutReducer,
    inboxReducer
})