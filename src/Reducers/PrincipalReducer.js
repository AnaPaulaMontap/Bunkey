import * as actions from '../Action/actionTypes'

export default (
    state = {
        num_entered: "",
        result: ""
    }, 
    action
)=> {
    switch (action.type){
     case actions.VIEW_RESULT:
     return {
         ...state,
         num_entered: action.payload.number,
         result: action.payload.result,
     }
        default:
        return {...state}
    }
} 