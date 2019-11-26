import createReducer from "../utils/createReducer";
import inboxAcTypes from "../actionTypes/inboxAcTypes";
const initState = {
    name:'inboxPage',
    index:1
}

export default createReducer(initState,{
    [inboxAcTypes.ADD_INBOX_INDEX](state,action){
        console.log(0)
        return {
            ...initState,
            index:++state.index
        }
    }
})
