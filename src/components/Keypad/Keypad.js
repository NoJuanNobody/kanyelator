import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import useKeypad from './Keypad.hook'
import styles from './Keypad.styles'
import { pressAnswer } from 'modules/keypad/actions';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(styles)

function Keypad({disp=0}) {
  const classes = useStyles()
  const { ans } = useSelector(({keypad}) => keypad);
  const [ display, setDisplay ] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <span>the yeezy that makes math easy</span>
      <div className={classes.tray}>{ans ? ans : display}</div>
      <div>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>+</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>-</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>*</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>/</Button>
        <Button className={classes.button} onClick={(e)=> dispatch(pressAnswer(display))}> = </Button>
      </div>
      <div>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>1</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>2</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>3</Button>
      </div>
      <div>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>4</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>5</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>6</Button>
      </div>
      <div>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>7</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>8</Button>
        <Button className={classes.button} onClick={(e)=> setDisplay(`${display}${e.target.innerText}`)}>9</Button>
      </div>
      
    </div>
  )
}

export default Keypad
