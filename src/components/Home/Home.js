import React from 'react'
import style from '../../styles/Home.module.css'

//Components
import Header from './Header'
import Main from './Main'


const Home = () => {
  return (
    <div className={style.Container}>
        <Header/>
        <Main/>
     </div>
  )
}

export default Home