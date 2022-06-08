import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
// import {Linked} from './style'
import Call from '../../assets/images/Call.svg'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ 
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 ,
          background: '#8e8e8e8b',
          height: '100%',
          padding: '0',
          margin: '0',
        }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List sx={{
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    
    }}>
        
        {['Asosiy', 'Texnopark', 'It Talim', 'Startaplar','Loyihalar','Raqamlashtirish','Biznes', 'Infratuzilma'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <div className='DriverContainer'> 
                {/* <Linked activeClassName="active" to={'/home'}>{text}</Linked> */}
                
              </div>
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
        <div className='DriverCall'>
            <img src={Call} alt="" />
            <p>1227</p>
            
        </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{color:'#fff',fontSize: '40px'}}/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
