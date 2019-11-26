import createReducer from "../utils/createReducer";
import inboxAcTypes from "../actionTypes/inboxAcTypes";
const initState = {
    name:'inboxPage',
    index:1
}

export default createReducer(initState,{
    [inboxAcTypes.ADD_INBOX_INDEX](state,action){
        return {
            ...initState,
            index:++state.index
        }
    }
})
