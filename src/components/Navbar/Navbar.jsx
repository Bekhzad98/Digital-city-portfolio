import React, { useState ,useEffect} from 'react'
import style from './Navbar.module.css'

//Assets
import Logo from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import Select from './Select'
import Driver from './Driver'
import { Link } from '../../data/MainData'   

const Navbar = (props) => {
  useEffect(() => {
    fetch('http://167.99.214.82/get-info/')
    .then((response)=> {
        return response.json();
    })
    .then((datas)=> {
        console.log(datas)
    })
  
}, [])
  
  

    // console.log(scroll)
  return (
    <nav className={[style.Navbar,props.scroll ? style.NavbarBg : ""].join(' ')}>
       <div className={style.Logo}>
            <img src={Logo} alt="Logo" />
       </div>
       <ul>
           {
             Link.map((el, index)  =>( 
                    <li key={index} ><NavLink className={style.Linked} to={el.links}>{el.title}</NavLink></li>
            ))}
       </ul>
       <div className={style.SelectDiv}>
           <select name="" id="">
               <option value="">UZ</option>
               <option value="">RU</option>
               <option value="">EN</option>
           </select>
       </div>
       <div className={style.Drivers}>
            <Driver />
       </div>
        
    </nav>
  )
}

export default Navbar