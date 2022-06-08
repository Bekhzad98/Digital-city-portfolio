import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

//components
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Navigation from './components/NavigationMenu/Navigation';


function App() {
  const [scroll, setScroll] = useState(false);
  
  const ChangeColor = () => {
    console.log(window.scrollY)
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
      </Routes>
      <Navigation/>
    </>
  );
}

export default App;
