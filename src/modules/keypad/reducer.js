import { combineReducers } from 'redux';
import { 
    PRESS_ANSWER,
    PRESS_NUM,
    PRESS_KEY
} from './actiontypes';

export default function (state={}, action){
    
    switch(action.type){
        case PRESS_ANSWER:
            
            let ans = eval(action.payload);
            console.log(ans);
            return {
                ...state,
                ans,
            }
            break;
        default:
            return {
                ...state
            }
    }
}