import React, { useState } from 'react'
import style from '../../styles/Header.module.css'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Play from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Header = () => {
  

 
  return (
    <div className={style.Container}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
                <h1 className={style.Title}>
                    Raqamli Andijon
                </h1>
        
            </Grid>
            <Grid item  xs={12} md={6}>
            <div className={style.Items}>
                <div className={style.PlayMovie}>
                        <span>
                            <Play className={style.PlayIcon} sx={{fontSize: '4vw'}}/>
                            
                        </span>
                </div>
                <div className={style.PlaySwiper}>
                    
                </div>
            </div>
            </Grid>
            
      </Grid>

      <Grid item className={style.ButtonDiv} xs={12} >
            <Button className={style.Buttons}>Infratuzilma</Button>
      </Grid>
      
    </div>
  )
}

export default Header