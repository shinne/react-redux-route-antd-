import createReducer from "../utils/createReducer";
import types from '../actionTypes/aboutAcTypes'

const initState = {
    name:'aboutPage',
    index:1
}

export default createReducer(initState,{
    [types.ADD_INDEX](state,action){
        console.log('xxxxx')
        return {
            ...initState,
            index:++state.index
        }
    }
})
