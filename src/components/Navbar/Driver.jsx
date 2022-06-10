import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
//imported
import Call from '@mui/icons-material/Call';
import MovieLogo from '../../assets/video/driwer2.mp4'
import style from './Navbar.module.css'

import { Link } from '../../data/MainData';

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
    <Box className={style.DriverBox}
      sx={{ 
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 
        }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={style.DriverLogo}>
        <video src={MovieLogo} autoPlay loop></video>
        <span>Digital City</span>
        
      </div>

        <div className={style.DriverList}>
        {Link.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <div data-aos="zoom-in-right"
              data-aos-duration="1000" className='DriverContainer'> 
                <NavLink className={style.DriverLinks} activeClassName="active" to={item.links}>{item.title}</NavLink>
                
              </div>
            </ListItemButton>
          </ListItem>
        ))}
        </div>
        <div data-aos="zoom-in-right"
              data-aos-duration="1000" className={style.DriverCall}>
            <Call className={style.DriverCall_Icon}/>
            <p>1227</p>
            
        </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment  key={anchor}>
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
