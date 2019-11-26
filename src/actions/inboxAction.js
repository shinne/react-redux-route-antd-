import types from '../actionTypes/inboxAcTypes'

export default {
    asyncAddPageIndex(){
        return dispatch => {
            setTimeout(() =>{
                dispatch({type:types.ADD_INBOX_INDEX})
            })
        }
    }
}