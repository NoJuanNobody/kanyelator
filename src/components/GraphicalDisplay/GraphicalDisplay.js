import React, { PureComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './GraphicalDisplay.styles'
import { happy, confused } from 'constants/kanyeImages'
const useStyles = makeStyles(styles)
// turn to component
class Display extends PureComponent {
  
}
function GraphicalDisplay({ isHappy }) {
  const classes = useStyles()
  let face = isHappy ? happy : confused
  return (
    <div className={classes.root}>
      <img className={classes.display} alt="#" src={ face } />
    </div>
  )
}

export default GraphicalDisplay
