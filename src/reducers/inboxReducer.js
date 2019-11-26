import createReducer from "../utils/createReducer";
const initState = {
    name:'inboxPage',
    index:1
}

export default createReducer(initState,{
    CHANGE_INDEX(state,action){
        return {
            ...initState,
            index:state.index++
        }
    }
})
