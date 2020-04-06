import {
    PRESS_KEY,
    PRESS_NUM,
    PRESS_ANSWER,
} from './actiontypes'


export function pressKey(payload) {
return {
    type: PRESS_KEY,
    payload,
}
}

export function pressNumber(payload) {
return {
    type: PRESS_NUM,
    payload,
}
}

export function pressAnswer(payload) {
return {
    type: PRESS_ANSWER,
    payload,
}
}

