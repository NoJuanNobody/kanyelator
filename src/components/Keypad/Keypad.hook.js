import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actions from 'modules/keypad/actions'

/**
 * Custom hook for Keypad component
 * keeps track of ans for calculator and 
//  */
export default function useKeypad() {
    const dispatch = useDispatch()
    return useMemo(()=> bindActionCreators(actions, dispatch), [dispatch]);
}
