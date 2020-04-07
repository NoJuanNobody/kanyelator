import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import useKeypad from './Keypad.hook'
import styles from './Keypad.styles'

const useStyles = makeStyles(styles)




function Keypad({disp=0}) {
  const classes = useStyles()
  const { ans } = useSelector(({keypad}) => keypad);
  //press answer modifies keyboard
  // 
  /** press answer modifies keyboard
   *  between input key and reset on enter */
  const { pressAnswer, resetOnEnter, inputKey} = useKeypad();
  const [ display, setDisplay ] = useState(1);
  const [ lastKey, setLastKey ] = useState(null);
  const handleKeyPress = ({target: {innerText: digit}}) =>  {
    if(lastKey === '='){
      setDisplay(digit);
      setLastKey(digit)
      console.log(lastKey, digit)
    }
    setDisplay(`${display}${digit}`)
    setLastKey(digit)
  }
  return (
    <div className={classes.root}>
      <span>the yeezy that makes math easy</span>
  
      <div className={classes.tray}>{ans ? ans : display}</div>
      <div>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>+</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>-</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>*</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>/</Button>
        <Button className={classes.button} onClick={(e)=> pressAnswer(display)}> = </Button>
      </div>
      <div>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>1</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>2</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>3</Button>
      </div>
      <div>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>4</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>5</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>6</Button>
      </div>
      <div>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>7</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>8</Button>
        <Button className={classes.button} onClick={(e) => handleKeyPress(e)}>9</Button>
      </div>
      
    </div>
  )
}

export default Keypad
