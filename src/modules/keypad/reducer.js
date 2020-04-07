import { combineReducers } from 'redux';
import { 
    MODE_DIGIT,
    MODE_OPERATOR,
    PRESS_ANSWER
} from './actiontypes';

export default function (state={}, action){
    let { type, payload } = action
    switch(type){
        case PRESS_ANSWER:
            let ans = eval(payload);
            console.log({
                ...state,
                ans,
            })
            return {
                ...state,
                ans,
            }
            break;
        case MODE_DIGIT:
            return {
                ...state,
                ans,
            }
            break;
        case MODE_OPERATOR:
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