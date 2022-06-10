import React from 'react'
import style from '../../styles/Header.module.css'

import HeaderSwipers from './Swiper/HeaderSwiper'
import Grid from '@mui/material/Grid';

import { Button} from '@mui/material'



const Header = () => {

  return (
    <div className={style.Container}>
                <HeaderSwipers/>
      <Grid item className={style.ButtonDiv} xs={12} >
            <Button className={style.Buttons}>Infratuzilma</Button>
      </Grid>
      
    </div>
  )
}

export default Header