import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

//components
import Home from './components/Home/Home'
import ItTalim from './components/It-Talim/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar'
import Biznes from './components/Biznes/Biznes'
import  Startaplar  from './components/Startaplar/Navbar';
import Raqamlashtirish from './components/Raqamlashtirish/Raqamlashtirish'
import Infrastructure from './components/Infratuzilma/infrastructuresComponents/infrastructure/Infrastructures'
import Technopark from './components/Technopark/Container'
// import Navigation from './components/NavigationMenu/Navigation';


function App() {
  const [scroll, setScroll] = useState(false);
  
  const ChangeColor = () => {
    // console.log(window.scrollY)
    if(window.scrollY >= 50){
        setScroll(true)
      }else{
        setScroll(false)
      }
  }

  let navigate = useNavigate()
  
    useEffect(() => {
    navigate('/home')

    AOS.init();
    AOS.refresh();

    window.addEventListener('scroll', ChangeColor, true)
    return () => {
        window.removeEventListener('scroll', ChangeColor)
    }

  }, [])

  return (
    <>
      <Navbar scroll={scroll}/>
      <Routes defaultRouteName='/home'>
        <Route path='/home' element={<Home/>}/>
        <Route path='/it-talim' element={<ItTalim/>}/>
        <Route path='/biznes' element={<Biznes/>}/>
        <Route path='/startaplar' element={<Startaplar/>}/>
        <Route path='/infratuzilma' element={<Infrastructure/>}/>
        <Route path='/raqamlashtirish' element={<Raqamlashtirish/>}/>
        <Route path='/texnopark' element={<Technopark/>}/>
      </Routes>
      {/* <Navigation/> */}
    </>
  )
}

export default App;
