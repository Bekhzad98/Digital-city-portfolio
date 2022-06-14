import styled from "styled-components";
import img from '../../assets/images/biznes.png'
import Head from '@mui/icons-material/HeadsetMicRounded';
import { Button } from "@mui/material";
import Dashboar from '@mui/icons-material/DashboardCustomizeOutlined';
import Clean from '@mui/icons-material/CleanHandsOutlined';
import Rocket from '@mui/icons-material/RocketLaunchOutlined';
import Local from '@mui/icons-material/LocalPhone';


export const Wrapper = styled.div`
    width: 100%;
    /* height: 100vh; */
    flex-wrap: wrap;
    background-image: url(${img});
    background-attachment: fixed;
    /* overflow-y: scroll; */
    background-repeat: no-repeat;
    background-size: cover; 
    padding-top: 8vw;
    @media (max-width:360px){
        display: flex;
        justify-content: center;
        align-items: center;
    
    }
    @media (max-width:1200px){
       padding-bottom: 600px;
       padding-top: 15vw;
    
    }
`
// <<--- 	!BigText! --->
export const BigText = styled.div`
    color: aliceblue;
    width: 70%;
    margin-left: 13%;
    margin-top:-800px;
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;	
   
`

export const PhoneNum = styled.div`
	display: flex;
	margin-top: 100px;
    margin-left: 80%;
    justify-content: flex-end;
    align-items: center;
    text-align: end;
	text-align: center;
	padding: 5px;
	z-index: 9999;
    margin-right:10px;
    width: 140px;
    height: 50px;
    
    @media (max-width:800px){
        width: 20px;
        margin-top: 20px;
        text-align: center;
    }
	
`
export const Number = styled.h1`
	color:white;
	margin-bottom: 7px;
`

export const QandayH3 = styled.h3`
	color: white;
    font-size: 1.4vw;

`
// <<--- !TextS! --->
export const TextS = styled.div`
    position: relative;
    margin-bottom: -150px;
    font-weight: 700;
    font-size: 95.724px;
    color: rgba(255, 255, 255, 0.04);
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media(max-width: 1500px){
        font-size:80px;
    }
    @media(max-width: 1400px){
        font-size:70px;
    }
    @media(max-width: 1300px){
        font-size:70px;
    }
`
export const TextB = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -200px;
    margin:50px;
    width: 100%;
    font-size: 50px;
    font-family: 'Play';
    font-size: 28px;
    line-height: 35px;
    font-weight: 600;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-left: -10px;
    @media(max-width:817px){
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0px;
    }
`
export const Text1 = styled.p`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
// <<---!BioznesTime! --->>

export const BiznesTime = styled.div`
    color: aliceblue;
    width: 70%;
    justify-content: space-evenly;
    align-items: center;
    margin:5%;
    padding: 1%;
    margin-left: 12%;
    margin-bottom:10% ;
    margin: 0 auto;
    max-width: 1140px;
    text-align: center;
    display: flex;
	position: relative;
    @media (max-width:800px){
        flex-direction: column;
    }
`
export const Biznes1 = styled.div`
    margin-right:30px ;
    width: 250px;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
        margin-left: 30px;
    }
    
`
export const Biznes2 = styled.div`
    
    width: 250px;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
    }
`
export const Biznes3 = styled.div`
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
    }
    width: 250px;
`
// <<--- !MyIcon! --->
export const MyIcon = styled.div`
    width: 3%;
    height: 25%;
    color: white;
    margin-top: 8%;
    columns: inherit;
    position: absolute;
    margin-left: 1%;
    margin-top: -2%;
    padding: 15px;
    @media(max-width: 618px){
        display: none;
    }
`
export const DashboarIcon = styled(Dashboar)`
    background-color: #90900920 !important;
    padding: 7px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    margin: 15px !important;
`
export const CleanIcon = styled(Clean)`
    background-color: #90900920 !important;
    padding: 7px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    margin: 15px !important;
`
export const RocketIcon = styled(Rocket)`
    background-color: #90900920 !important;
    padding: 7px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    margin: 15px !important;
`
export const LocalIcon = styled(Local)`
    background-color: #90900920 !important;
    padding: 7px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    margin: 15px !important;
`
export const H = styled.h2`
    margin-left: 3%;
`
// <<--- !Compony! --->
export const Company = styled.div`
    width: 100%;
    height: auto ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 4rem;
    /* padding: 0 5%; */
    /* border: 1px solid red; */
   
    @media (max-width:1309px){
        flex-direction: column;
        margin-top: 40px;
        margin-bottom: 100px;
        display:flex;
        align-items: center;
        text-align: center;
        margin-left: 5%;
        height: auto;
    }
    padding: 10px;
    margin-top: 15px;
    button{
        
    }
`
export const Btn1 = styled.div`
    width: 100%;
    height:200px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
    border: 1px solid #6C63ff !important;
    color: #fff !important;
    border-radius: 50px !important;
    font-size: 15px !important;
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(10px) !important;
    @media (max-width:890){
        margin-top: 200px;
    }
    }
`
export const Person = styled.img`
    width: 300px;
    height: 400px;
    object-fit: contain;
`
export const Text = styled.div`
    display: flex;
    justify-content: center;
    row-gap: 40px;
    width: 40%;
    height: 430px;
    color: #fff;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width:700px){
        width:100%;
    }
`
export const TextColums = styled.div`
   display: flex;
   flex-wrap: wrap;
   row-gap: 3vw;

    @media (max-width:700px){
        width:100%;
    }
`
export const Text01 = styled.div`
    width:50% ;
    height:27.5%;
    text-align: center;
    

    h1{
        font-size: 3vw;
    }
    h4 {
        @media (max-width:888px){
       /* font-size: 1vw; */
    }
    }
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
        font-size: 3vw;
    }
`
// export const Text02 = styled.div`
//     width:45% ;
//     height:27.5%;
//     text-align: center;
//     @media (max-width:888px){
//         width:100%;
//         margin-top:20px;
//     }
// `
// export const Text03 = styled.div`
//     width:45% ;
//     height:27.5%;
//     text-align: center;
//     @media (max-width:888px){
//         width:100%;
//         margin-top:20px;
//     }
// `
// export const Text04 = styled.div`
//     width:45% ;
//     height:30%;
//     text-align: center;
//     margin-top: 10px;
//     @media (max-width:888px){
//         width:100%;
//         margin-top:20px;
//     }
// `

// <<--- !Price! --->
export const Price = styled.div`
    width: 90%;
    height: 70%;
    left: 0;
    top: 1762px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 6%;
    font-weight: 400;
    margin-top: 15px;
    margin-top: 100px;
    @media (max-width:1190px){
        flex-direction: column;
        height: auto;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Prices = styled.div`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:750px){
        width:100%;
        margin-top:20px;
    }
`
export const Consultatsion = styled.div`
    width: 350px;
    height: 436px;
    border-radius: 20px;
    border: 1px solid #fff;
    padding: 20px 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    margin-bottom:15px;
    h2{
        font-size: 20px;
        font-weight: 600;
    }
    h3{
        font-size:15px;
        font-weight: 300;
        line-height: 2rem;
    }
    @media (max-width:360px){
        width: 290px;
        margin-right: 5px;
    }
`
export const Whatch = styled.h3`
    
`
export const Price1 = styled.h2`
    color:#fff;
    margin-top: 30px;
    margin-bottom: 10px;
`
export const Button1 = styled(Button)`
    background: #6C63ff !important;
    border: 1px solid #6C63ff !important;
    color: #fff !important;
    border-radius: 50px !important;
    font-size: 15px !important;
    @media (max-width:1030){
        margin-bottom:60px ;
    }
`
export const Big = styled.div`
    width: 100%;
    height: 100vh;
    @media (max-width:888px){
        margin-top: 200px;
    }
    @media (max-width:360px){
        width: 318px;
    }
`
export const HourglasIcon = styled.img`
    margin-left:8px!important;
    width:43px!important;
    height:43px!important;
    color:blue!important;
`
export const EditIcon = styled.img`
    margin-left:8px !important;
    border:3px solid white !important;
    border-radius:50% !important;
    
    width:51px !important;
    height:51px !important;
    color:blue !important;
`
export const HeadIcon = styled(Head)`
    margin-left:8px !important;
    width:51px !important;
    height:51px !important;
`
export const Btn = styled.button`
    width: 230px;
    height: 50px;
    border-radius: 50px;
    font-size: 20px;
    font-family: Play;
    background-color: #6C63ff;
    color: white;
    transition: 0.2s;
`
export const Main = styled.div`
    font-family: Play;
    
`
//forum:
export const Modal = styled.div``
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: Play;
`
export const Form = styled.div `
    width: 600px;
    height: 750px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 20px;
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 50px 0px;
    transform: scale(.9);
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    color:white;
    @media (max-width:477px){
        width: 315px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
    }
    input {
        outline: none;
        border: none;
        width: 454px;
        height: 57px;
        text-align: start;
        padding: 0px 5px ;
        border-radius: 10px;
        font-size: 25px;
        background-color: rgba(255,255,255,0.35);
        color: #fff;
        margin: 10px;
        padding: 10px;
        font-size: 20px;
        @media (max-width:477px){
        width: 315px;
        transform: scale(1);
    }
        }
    label{
        height: 30px;
        widows: 30px;
        margin-left:10px;
    }
    
    h1{
        position: absolute;
        top: 5px;
        right: 15px;
}     
`
export const Item1 = styled.div`
    display: flex;
    flex-direction: column;
    color:white;
    textarea{
        outline: none;
        border: none;
        width: 454px;
        height: 150px;
        padding: 0px 5px ;
        border-radius: 10px;
        background-color: rgba(255,255,255,0.35);
        color: aliceblue;
        margin: 10px;
        padding: 10px;
        text-align: start;
        font-size: 20px;
        min-width: 454px;
        min-height: 150px;
        max-height: 300px;
        @media (max-width:477px){
        width: 315px;
        min-width: 315px;
    }
        }
    label{
        height: 30px;
        widows: 30px;
        margin-left:10px;
        @media (max-width:477px){
            text-align: center;
        }
    }     
`





  