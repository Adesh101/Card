import * as React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import List from '@material-ui/core/List'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

export const SidebarMenu = (props) => {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {props.itemsArray.map(item => {
        return (
          <Accordion   
      style={{
        color: '#fffff !important',
        padding: '0px !important',
        margin: '0px !important',
      }}>
      <AccordionSummary className="">
        <div >
          {item.Category}
        </div>  
      </AccordionSummary>
      <AccordionDetails style={{
        color: '#fffff',
        padding: 0,
        margin: 0,
      }}>
       
        <div className="">
          <ul>
            {
             item.SubCategory.map(subitem => {
              return ( 
                <Link to = {`/${item.Category}/${subitem}`} >              
              <li>
                {subitem}
             </li>
             </Link>
      )
      }
      ) 
            }         
          </ul>
        </div>
        
      </AccordionDetails>
    </Accordion>
        )
      })} 
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default SidebarMenu;

