import {
    MODE_OPERATOR,
    MODE_DIGIT,
    INPUT_MODE,
    RESET_MODE,
    ANSWER_MODE
} from './actiontypes'


export function inputKey(payload) {
    return {
        type: INPUT_MODE,
        payload,
    }
}

export function resetOnEnter(payload) {
    return {
        type: RESET_MODE,
        payload,
    }
}

export function pressKey(payload) {
    return {
        type: MODE_OPERATOR,
        payload,
    }
}

export function pressNumber(payload) {
    return {
        type: MODE_DIGIT,
        payload,
}
}

export function pressAnswer(payload) {
    return {
        type: ANSWER_MODE,
        payload,
}
}

