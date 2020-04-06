import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Paper, Button, Grid } from '@material-ui/core'
import { ACCOUNT_PATH, LIST_PATH } from 'constants/paths'
import styles from './HomePage.styles'
import Keypad from 'components/Keypad';
import GraphicalDisplay from 'components/GraphicalDisplay';
const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

const useStyles = makeStyles(styles)

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* <Typography variant="h3" component="h3" gutterBottom>
        Kanyelator:
      </Typography> */}
      <Paper>
        <Grid container justify="center">
          <Grid item xs className={classes.section}>
              <GraphicalDisplay isHappy />
              <Keypad disp={0}/>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Home
