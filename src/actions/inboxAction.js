import types from '../actionTypes/inboxAcTypes'

export default {
    asyncAddPageIndex(){
        console.log(1)
        return dispatch => {
            setTimeout(() =>{
                dispatch({type:types.ADD_INBOX_INDEX})
            })
        }
    }
}