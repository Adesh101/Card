import * as React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import SidebarMenu from "./SidebarMenu"
import {Home} from '../Routes/Home';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export const Sidebar = (props) => {  const classes = useStyles()

  return (
      
    <div className={clsx('Sidebar', classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SidebarMenu itemsArray = {props['itemsArray']} />
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography> 
              <div>
                <div>
                  <h1 style={{fontSize: "15px", paddingTop: "20px"}}>Today's Ads</h1>
                </div>
                <Home />
              </div>
          </Typography>
        </Container>
      </main>
    </div>
  )
}

export const drawerWidth = 240

var cardStyle = {
  display: 'block',
  width: '30vw',
  transitionDuration: '0.3s',
  height: '45vw'
}

export const useStyles = makeStyles( {
  media: {
    height: 140,
    margin: '1px solid black',
  },
  cardContent: {
    maxWidth: 345,
  },
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: '4px',
    paddingBottom: '4px',
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container:{
   paddingTop: '4px',
   paddingBottom: '4px'

 }
})
export default Sidebar;
