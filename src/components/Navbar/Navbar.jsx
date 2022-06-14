import React, { useState ,useEffect} from 'react'
import style from './Navbar.module.css'

//Assets

import { NavLink } from 'react-router-dom'
// import Select from './Select'
import Driver from './Driver'
import { Link } from '../../data/MainData'   
import axios from 'axios'

//API

const Navbar = (props) => {
  const [data, setData] = useState({})
  useEffect(() => {
   axios.get('http://167.99.214.82/get-info/')
   .then(res=>{
     setData(res.data)
    })
  
}, [])

  return (
    <nav className={[style.Navbar,props.scroll ? style.NavbarBg : ""].join(' ')}>
       <div className={style.Logo}>
            <img src={`http://167.99.214.82${data.logo}`} alt="Logo" />
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