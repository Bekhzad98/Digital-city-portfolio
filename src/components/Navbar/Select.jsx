import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const useStyles = makeStyles({
      select: {
        "&:after": {
          borderBottomColor: "#fff",
        },
        "& .MuiSvgIcon-root": { 
          color: "#fff",
        },
      },
})

export default function BasicSelect() {
  const classes = useStyles()
  const [age, setAge] = useState(10); 
                                        
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box style={{position: 'relative'}}>
      <FormControl>
        <Select
        sx={
            {  
                position: 'relative',
                color: '#fff',
                width: '100px',
                height: '30px',
                outline: 'none',
                border: '2px solid #fff',
                borderRadius: '20px'
            }
        }
        labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          defaultValue={age}
          onChange={handleChange}
          className={classes.select}
        >
          <MenuItem sx={{border: 'none'}} value={10}>UZ</MenuItem>
          <MenuItem value={20}>RU</MenuItem>
          <MenuItem value={30}>EN</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
