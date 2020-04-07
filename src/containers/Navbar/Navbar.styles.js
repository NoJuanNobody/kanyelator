import theme from 'theme'

export default () => ({
  flex: {
    flexGrow: 1
  },
  brand: {
    "margin": "auto",
    color: theme.palette.primary.main,
  },
  appBar: {
    backgroundColor: 'rgba(0,0,0,0)',
    dropShadow: 'none' ,
    boxShadow: 'none',
  },
  signIn: {
    color: 'white',
    textDecoration: 'none',
    alignSelf: 'center'
  }
})
