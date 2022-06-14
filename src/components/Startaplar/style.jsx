import styled from 'styled-components'
import DCIMAGE from './images/DC.png'
import Gameimg from './images/gamepicture.png'
import { Checkbox } from '@mui/material'

export const Container = styled.div`
    
`
export const DCimg = styled.div`
    width: 100%;
    height: 1240px;
    background: url(${DCIMAGE}) fixed center;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    @media (max-width:500px) {
        height: 1650px;
    }
    @media (max-width:330px){
        height: 2150px;
    }
    @media (max-width:350px){
        height: 2200px;
    }
    @media (min-width:350px) and (max-width:400px) {
        height: 2700px;
    }
    @media (min-width: 650px) and (max-width: 750px){
        height: 1270px;
    }
    @media (min-width: 570px) and (max-width: 650px){
        height: 1800px;
    }

`
export const DCimg2 = styled.div`
    width: 100%;
    height: 1400px;
    background: url(${Gameimg}) fixed center;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    @media (max-width:500px){
        height: 2000px;
    }
    
    @media (max-width:330px){
        height: 2400px;
    }
    
    @media (max-width:350px){
        height: 2410px;
    }
    @media (min-width:350px) and (max-width:400px){
        height: 1400px;
    }
    @media (min-width: 650px) and (max-width: 750px){
        height: 1600px;
    }
    
        
`

export const Startaplar = styled.h1`
    color: white;
    position: absolute;
    top: 20%;
    left: 42%;
    font-size: 27px;
    font-family: 'Play';
    @media (max-width:500px){
        font-size: 28px;
        top: 18%;
        left: 35%;
    }
    @media (max-width:330px){
        left: 20%;
    }
    @media (max-width:350px){
        left: 20%;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 27%; 
    }
    @media (min-width: 440px) and (max-width: 470px){
        left: 29%;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 30%;
    }   
    @media (min-width: 650px) and (max-width: 750px){
        left: 40%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 35%;
    }
`
export const Loyiha = styled.h3`
    position: absolute;
    width: 638px;
    height: 222px;
    left: 210px;
    top: 300px;
    color: white;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 155.52%;
    
    @media (max-width:500px){
        width: 400px;
        top: 250px;
        left: 50px;
        text-align: center;
    }
    @media (max-width:330px){
        font-size: 17px;
        width: 280px;
        left: 20px;
    }
    @media (max-width: 350px){
        font-size: 17px;
        width: 250px;
        left: 20px;
    }
    @media (min-width:350px) and (max-width:400px) {
        font-size: 17px;
        width: 270px;
        left: 50px;
    }
    @media(min-width: 440px) and (max-width: 470px){
        left: 20px;
    }   
    @media (min-width: 401px) and (max-width: 439px){
        width: 360px;
        left: 35px;

    }
    @media (min-width: 930px) and (max-width:1150px){
        left: 100px;
    }
    @media (min-width: 850px) and (max-width: 930px){
        text-align: center;
        width: 50%;
        left: 5%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        text-align: center;
        left: 5%;
        width: 50%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        text-align: center;
        left: 5%;
        width: 50%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        text-align: center;
        left: 14%;
        width: 75%;
    }
        
`
export const Startword = styled.h2`
    position: absolute;
    width: 214px;
    height: 37px;
    left: 210px;
    top: 260px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 155.52%;
    color: white;
    @media (max-width:500px){
        top: 210px;
        left: 130px;
        font-size: 21px;
        text-align: center;
    }
    @media (max-width:330px){
        left: 20px;
        font-size: 19px;
    }
    @media (max-width:350px){
        left: 20px;
        font-size: 19px;
    }
    @media (min-width:350px) and (max-width:400px) {
        left: 80px;
        font-size: 19px;
    }
    @media (min-width: 440px) and (max-width: 470px){
        left: 27%;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 25%;
    }
    @media (min-width: 930px) and (max-width:1150px){
        left: 100px;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 15%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 16%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 15%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 32%;
    }
`
export const Roketimg = styled.img`
    position: absolute;
    width: 314.33px;
    height: 323.21px;
    left: 890.77px;
    top: 203.39px;   
    @media (max-width:500px){
        left: 150px;
        top: 540px;
        width: 240px;
        height: 263px;
        border: 0px 0px 2px solid red;
    }
    @media (max-width:330px){
        left: 50px;
    }
    @media (max-width:350px){
        left: 40px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 80px;
    }
    @media(min-width: 440px) and (max-width: 470px){
        left: 95px;
        top: 560px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        top: 580px;
        left: 80px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        width: 210px;
        height: 253px;
        top: 250px;
    }
    @media (min-width: 1070px) and (max-width:1150px){
        left: 830px;
        width: 300px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 728px;
        width: 200px;
        height: 210px;
        top: 250px;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 53%;
        top: 30%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 53%;
        top: 30%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 51.7%;
        top: 33%;
    }
    @media (min-width: 570px) and (max-width: 650px) {
        left: 24%;
        top: 80%;
    }
`
export const Startword1 = styled.h1`
    position: absolute;
    width: 157px;
    height: 44px;
    left: 570px;
    top: 630px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 155.52%;
    color: #FFFFFF;      
    @media (max-width:500px){
        top: 850px;
        left: 160px;
    }
    @media (max-width:330px){
        left: 80px;
    }
    @media (max-width:350px){
        left: 80px;
    }
    @media (min-width:350px) and (max-width:400px){
        top: 850px;
        left: 110px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 130px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 500px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 42.5%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 42%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 42%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 42%;
        top: 95%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 40%;
        top: 130%;
    }
`


export const Dollorimg = styled.img`
    position: absolute;
    width: 75px;
    height: 60.94px;
    left: 280px;
    top: 745px;
    @media (max-width:500px){
        top: 960px;
        left: 60px;
        width: 85px;
        height: 70.94px;
    }
    @media (max-width:330px){
        left: 110px;
    }
    @media (max-width:350px){
        left: 110px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 40px;
    }
    @media (min-width: 440px) and (max-width: 470px){
        
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 180px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 12%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 15%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 15%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 15%;
        top: 52rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 15%;
        top: 73.5rem;
    }
`
export const HEART = styled.img`
    position: absolute;
    width: 75px;
    height: 60px;
    left: 620px;
    top: 745px;
    @media (max-width:500px){
        top: 960px;
        left: 320px;
        width: 85px;
        height: 70.94px;
    }
    @media (max-width:330px){
        left: 110px;
        top: 1150px;
    }
    @media (max-width:350px){
        left: 110px;
        top: 1150px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 245px;
    }
    @media (min-width: 440px) and (max-width: 470px){
        left: 300px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 265px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 520px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 47%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 45%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 45%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 45%;
        top: 52rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 45%;
        top: 73.5rem;
    }
    
`
export const Floverimg = styled.img`
    position: absolute;
    width: 75px;
    height: 60px;
    left: 990px;
    top: 745px;
    @media (max-width:500px){
        top: 1150px;
        left: 60px;
        width: 85px;
        height: 70.94px;
    }
    @media (max-width:330px){
        left: 110px;
        top: 1330px;
    }
    @media (max-width:350px){
        left: 110px;
        top: 1330px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 40px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 890px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 82%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 75%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 75%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 75%;
        top: 52rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 75%;
        top: 73.5rem;
    }
`
export const Comeimg = styled.img`
    position: absolute;
    width: 75px;
    height: 60px;
    left: 280px;
    top: 1000px;
    @media (max-width:500px){
        top: 1150px;
        left: 320px;
        width: 85px;
        height: 70.94px;
    }
    @media (max-width:330px){
        left: 110px;
        top: 1515px;
    }
    @media (max-width:350px){
        left: 110px;
        top: 1515px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 245px;
    }
    @media (min-width:440px) and (max-width:470px){
        left: 300px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 265px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 180px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 12%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 15%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 15%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 15%;
        top: 66.5rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 15%;
        top: 89.5rem;
    }
`
export const Bookimg = styled.img`
    position: absolute;
    width: 100px;
    height: 60px;
    left: 620px;
    top: 1000px;
    @media (max-width:500px){
        top: 1360px;
        left: 60px;
        width: 95px;
        height: 70.94px;
    }
    @media (max-width:330px){
        left: 110px;
        top: 1700px;
    }
    @media (max-width:350px){
        left: 110px;
        top: 1700px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 40px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 520px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 47%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 45%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 45%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 45%;
        top: 66.5rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 45%;
        top: 89.5rem;
    }
`
export const Homeimg = styled.img`
    position: absolute;
    width: 75px;
    height: 60px;
    left: 990px;
    top: 1000px;
    @media (max-width:500px){
        top: 1360px;
        left: 320px;
        width: 85px;
        height: 70.94px;
    }
    @media (max-width:330px){
        left: 110px;
        top: 1910px;
    }
    @media (max-width:350px){
        left: 110px;
        top: 1910px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 245px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 265px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 890px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 82%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 75%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 75%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 75%;
        top: 66.5rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 75%;
        top: 89.5rem;
    }
`
export const Word1 = styled.h1`
    position: absolute;
    width: 123px;
    height: 35px;
    left: 260px;
    top: 833px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 25.8px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        left: 45px;
        top: 1040px;
    }
    @media (max-width:330px){
        left: 90px;
    }
    @media (max-width:350px){
        left: 90px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 20px;
        font-size: 20px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        font-size: 18px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 155px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 10%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 12.5%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 12.5%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 12.5%;
        top: 58rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 12.5%;
        top: 78rem;
    }
`
export const Word2 = styled.h1`
    position: absolute;
    width: 142px;
    height: 35px;
    left: 590px;
    top: 833px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 25.8px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        left: 290px;
        top: 1040px;
    }
    @media (max-width:330px){
        left: 80px;
        top: 1230px;
    }
    @media (max-width:350px){
        left: 80px;
        top: 1230px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 230px;
        width: 115px;
        font-size: 20px;
    }
    @media (min-width: 440px) and (max-width: 470px) {
        left: 275px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 240px;
        font-size: 18px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 490px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 44%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 41%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 41%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 41%;
        top: 58rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 41%;
        top: 78rem;
    }
`
export const Word3 = styled.h1`
    position: absolute;
    width: 148px;
    height: 35px;
    left: 960px;
    top: 833px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 25.8px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        left: 45px;
        top: 1230px;
        left: 40px;
    }
    @media (max-width:330px){
        left: 80px;
        top: 1410px;
    }
    @media (max-width:350px){
        left: 80px;
        top: 1410px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 10px;
        font-size: 20px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 30px;
        font-size: 18px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 860px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 79%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 72%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 72%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 72%;
        top: 58rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 71%;
        top: 78rem;
    }
`
export const Word4 = styled.h1`
    position: absolute;
    width: 193px;
    height: 35px;
    left: 225px;
    top: 1080px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 25.8px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        left: 260px;
        top: 1230px;
    }
    @media (max-width:330px){
        left: 60px;
        top: 1600px;
    }
    @media (max-width:350px){
        left: 60px;
        top: 1600px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 225px;
        font-size: 20px;
        width: 125px;
    }
    @media (min-width: 440px) and (max-width: 470px){
        left: 245px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 245px;
        font-size: 18px;
        width: 130px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 120px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 7%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 8%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 8%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        text-align: center;
        left: 10%;
        width: 140px;
        top: 72rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        text-align: center;
        left: 10%;
        width: 140px;
        top: 94rem;
    }
    
`
export const Word5 = styled.h1`
    position: absolute;
    width: 255px;
    height: 35px;
    left: 550px;
    top: 1080px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 25.8px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        top: 1440px;
        left: 55px;
        font-size: 25px;
        width: 100px;
    }
    @media (max-width:330px){
        left: 100px;
        top: 1785px;
    }
    @media (max-width:350px){
        left: 100px;
        top: 1785px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 40px;
        font-size: 20px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        font-size: 18px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 450px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 40%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 35.5%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 35.5%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 45.5%;
        width: 40px;
        top: 72rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        text-align: center;
        left: 42.5%;
        width: 140px;
        top: 94rem;
    }
`
export const Word6 = styled.h1`
    position: absolute;
    width: 87px;
    height: 35px;
    left: 980px;
    top: 1080px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 25.8px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        top: 1440px;
        left: 320px;
        font-size: 25px;
    }
    @media (max-width:330px){
        left: 110px;
        top: 1995px;
    }
    @media (max-width:350px){
        left: 110px;
        top: 1995px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 242px;
        font-size: 20px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        font-size: 18px;
        left: 260px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 880px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 81.5%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 74%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 74%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 74%;
        top: 72rem;
    }
    @media (min-width: 570px) and (max-width: 650px){
        left: 74%;
        top: 94rem;
    }
`
// 2- page

export const Text1 = styled.h1`
    position: absolute;
    width: 369px;
    height: 44px;
    left: 515px;
    top: 1279px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 155.52%;
    text-transform: uppercase;
    color: #FFFFFF;
 
    @media (max-width:500px){
        left: 80px;
        font-size: 24px;
        top: 1680px;
    }
    @media (max-width:330px){
        left: 15px;
        top: 136rem;
        font-size: 20px;
        width: 280px;
    }
    @media (max-width:350px){
        left: 25px;
        top: 138rem;
        font-size: 20px;
        width: 280px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 55px;
        font-size: 19px;
        width: 260px;
    }
    @media (min-width: 440px) and (max-width: 470px){
        left: 60px;
        width: 320px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        width: 320px;
        left: 45px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 440px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 38%;
        width: 300px;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 35%;
        width: 300px;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 34%;
        width: 300px;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 29%;
        width: 300px;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }

`
export const Rasm1 = styled.img`
    position: absolute;
    width: 115px;
    height: 115px;
    left: 300px;
    top: 1350px;
    @media (max-width:500px){
        top: 1770px;
        left: 65px;
    }
    @media (max-width:330px){
        left: 90px;
        top: 143rem;
    }
    @media (max-width:350px){
        left: 90px;
        top: 143rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 130px;
        top: 110rem;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 45px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 210px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 15%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 10%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 10%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 9%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }
`
export const Rasm2 = styled.img`
    position: absolute;
    width: 115px;
    height: 115px;
    left: 508px;
    top: 1350px;
    @media (max-width:500px){
        left: 290px;
        top: 1770px;
    }
    @media (max-width:330px){
        left: 90px;
        top: 158rem;
    }
    @media (max-width:350px){
        left: 90px;
        top: 158rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 130px;
        top: 125rem;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 250px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 420px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 35%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 32%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 32%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 31%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }

`
export const Rasm3 = styled.img`
    position: absolute;
    width: 115px;
    height: 115px;
    left: 715px;
    top: 1350px; 
    @media (max-width:500px){
        left: 0px;
        top: 122rem;
        left: 65px;
    }
    @media (max-width:330px){
        left: 90px;
        top: 175rem;
    }
    @media (max-width:350px){
        left: 90px;
        top: 175rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 130px;
        top: 140rem;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 45px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 625px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 55%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 54%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 54%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 53%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }
`
export const Rasm4 = styled.img`
    position: absolute;
    width: 115px;
    height: 115px;
    left: 920px;
    top: 1350px;
    @media (max-width:500px){
        left: 290px;
        top: 122rem;
    }
    @media (max-width:330px){
        left: 90px;
        top: 192rem;
    }
    @media (max-width:350px){
        left: 90px;
        top: 192rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 130px;
        top: 155rem;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 250px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 830px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 75%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 75%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 75%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 75%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }
`
export const Rasm1photo = styled.h1`
    position: absolute;
    width: 208px;
    height: 25px;
    left: 250px;
    top: 1470px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 155.52%;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        top: 1900px;
        left: 22px;
    }
    @media (max-width:330px){
        left: 45px;
        top: 151rem;
    }
    @media (max-width:350px){
        left: 45px;
        top: 151rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 80px;
        top: 118rem;
    }
    @media (min-width: 401px) and (max-width: 439px){
        width: 180px;
        left: 10px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 160px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 10.5%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 4%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 4%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 10%;
        width: 100px;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }
`
export const Rasm2photo = styled.h1`
    position: absolute;
    width: 160px;
    height: 30px;
    left: 490px;
    top: 1470px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 155.52%;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        top: 1900px;
        left: 268px;
    }
    @media (max-width:330px){
        left: 65px;
        top: 166rem;
    }
    @media (max-width:350px){
        left: 65px;
        top: 166rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 105px;
        top: 133rem;
    }
    @media (min-width: 401px) and (max-width:439px){
        left: 230px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 400px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 33%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 29%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 29%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 33.5%;
        width: 80px;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }
`
export const Rasm3photo = styled.h1`
    position: absolute;
    width: 108px;
    height: 50px;
    left: 720px;
    top: 1470px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 155.52%;
    text-align: center;
    color: #FFFFFF;
    @media (max-width:500px){
        left: 68px;
        top: 130rem;
    }
    @media (max-width:330px){
        left: 93px;
        top: 183rem;
    }
    @media (max-width:350px){
        left: 93px;
        top: 183rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 135px;
        top: 148rem;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 45px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 628px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 55.5%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 54%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 54%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 54%;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }
`
export const Rasm4photo = styled.h1`
    position: absolute;
    width: 208px;
    height: 50px;
    left: 880px;
    top: 1470px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 155.52%;
    text-align: center;
    color: #FFFFFF; 

    @media (max-width:500px){
        left: 250px;
        top: 130rem;
    }
    @media (max-width:330px){
        left: 40px;
        top: 200rem;
    }
    @media (max-width:350px){
        left: 40px;
        top: 200rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 85px;
        top: 163rem;
    }
    @media (min-width: 440px) and (max-width: 470px){
        left: 255px;
        width: 175px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        width: 170px;
        left: 225px;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        left: 785px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        left: 71%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 70%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 70%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 75%;
        width: 120px;
    }
    @media (min-width: 570px) and (max-width: 650px){
        top: 500rem;
    }
`
export const Sxemaa = styled.img`
    position: absolute;
    width: 447.57px;
    height: 177.5px;
    left: 770px;
    top: 1797px;
    @media (max-width:500px){
        left: 40px;
        top: 2950px;
        width: 407.57px;
        height: 167.5px;
    }
    @media (max-width:330px){
        left: 20px;
        top: 245rem;
        width: 257.57px;
        height: 107.5px;
    }
    @media (max-width:350px){
        left: 20px;
        top: 242rem;
        width: 257.57px;
        height: 107.5px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 50px;
        top: 200rem;
        width: 267.57px;
        height: 117.5px;
    }
    @media (min-width: 440px) and (max-width: 470px){
        width: 307.57px;
        height: 150.5px;
        left: 70px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        width: 307.57px;
        height: 157.5px;
        top: 188rem;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        width: 307.57px;
        height: 157.5px;
    }
    @media (min-width: 930px) and (max-width:1150px){
        width: 287.57px;
        height: 137.5px;
        left: 63%;
    }
    @media (min-width: 930px) and (max-width: 980px){
        left: 68.5%;
        top: 117rem;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: 58%;
        top: 118rem;
        width: 307.57px;
        height: 150.5px;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: 58%;
        top: 118rem;
        width: 307.57px;
        height: 150.5px;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 27%;
        top: 135rem;
        width: 307.57px;
        height: 150.5px;
    }
`
export const Inkubatsiya = styled.h1`
    position: absolute;
    width: 222px;
    height: 37px;
    left: 187px;
    top: 1698px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 155.52%;
    color: #FFFFFF;
    @media (max-width:500px){
        top: 2300px;
        left: 130px;
    }
    @media (max-width:330px){
        left: 20px;
        top: 212rem;
    }
    @media (max-width:350px){
        left: 20px;
        top: 212rem;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 70px;
        top: 175rem;
    }
    @media (min-width: 401px) and (max-width: 439px){
        left: 90px;
        text-align: center;
    }
    @media (min-width: 930px) and (max-width:1150px){
        left: 8%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: 35%;
    }
`
export const Inkub = styled.p`
    position: absolute;
    width: 605px;
    height: 370px;
    left: 187px;
    top: 1758px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 155.52%;
    color: #FFFFFF;
    @media (max-width:500px){
        top: 2350px;
        left: 50px;
        width: 390px;
        text-align: center;
    }
    @media (max-width:330px){
        left: 20px;
        top: 216rem;
        font-size: 15px;
        width: 250px;
    }
    @media (max-width:350px){
        left: 20px;
        top: 216rem;
        font-size: 15px;
        width: 250px;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 40px;
        top: 178rem;
        font-size: 15px;
        width: 290px;
    }
    @media (min-width: 440px) and (max-width: 470px){
        left: 30px;
    }
    @media (min-width: 401px) and (max-width: 439px){
        width: 320px;
        left: 40px;
    }
    @media (min-width: 930px) and (max-width:1150px){
        left: 10%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        text-align: center;
        left: 4%;
        width: 55%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        text-align: center;
        left: 4%;
        width: 55%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        text-align: center;
        left: 8%;
        width: 85%;
    }
`

export const DivCenter = styled.div`
    /* padding-top:18rem ;
    padding-left: 5rem;
    z-index: 1000;
    position: fixed; */
    position: absolute;
    position: fixed;
    margin-top: 170px;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    height:39vh;
    @media (max-width:500px){
        display: none;
    }
    @media (min-width: 300px) and (max-width:1150px){
        display: none;
    }
`
export const Divend = styled.div`
    color: white;
    cursor: pointer;
    width: 50px;
    height: 7vh;
    background-color: #8080804c;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:500px){
        width: 40px;
        height: 6vh;
    }
`
export const Icons = styled(Checkbox)`
    width: 50px;
    border-radius: 50% !important;
    background-color: #181c21 !important;
    @media (max-width:500px){
        width: 50px; 
        height: 50px;
    }

`
export const Icontic = styled.div`
    width: 70%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 200px;
    position: absolute;
    margin-top: 72%;
    @media (max-width:500px){
        margin-top: 330%;
        width: 10%;
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
        padding: 0px 10px;
    }
    @media (max-width:330px){
        left: 100px;
        top: 190rem;
        flex-direction: column;
        width: 20%;
    }
    @media (max-width:350px){
        left: 100px;
        top: 186rem;
        flex-direction: column;
        width: 20%;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 140px;
        top: 135rem;
        flex-direction: column;
        width: 20%;
    }
    @media (min-width: 440px) and (max-width: 470px){
        top: 110rem;
    }
    @media (min-width: 401px) and (max-width:439px){
        left: 140px;
        top: 120rem;
        flex-direction: column;
        width: 20%;
    }
    @media (min-width: 1250px) and (max-width:1300px) {
        top: 85rem;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        top: 90rem;
        left: -80px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        top: 190%;
        left: -10%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        left: -20%;
        top: 220%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        left: -20%;
        top: 230%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        left: -25%;
        top: 255%;
    }
`
export const Nexticontic = styled.div`
    width: 70%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 200px;
    position: absolute;
    margin-top: 85%;
    text-align: center;
    @media (max-width:500px){
        margin-top: 370%;
        width: 100px;
        margin-left: 20px;
    }
    @media (max-width:330px){
        left: 100px;
        top: 220rem;
        flex-direction: column;
        width: 20%;
    }
    @media (max-width:350px){
        left: 100px;
        top: 189rem;
        flex-direction: column;
        width: 20%;
    }
    @media (min-width:350px) and (max-width:400px){
        left: 130px;
        top: 137rem;
        flex-direction: column;
        width: 20%;
    }
    @media (min-width: 440px) and (max-width: 470px){
        top: 110rem;
    }
    @media (min-width: 401px) and (max-width:439px){
        left: 130px;
        top: 120rem;
        flex-direction: column;
        width: 20%;
    }
    @media (min-width: 1250px) and (max-width:1300px) {
        top: 85rem;
    }
    @media (min-width: 1150px) and (max-width:1220px){
        top: 90rem;
        left: -80px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        top: 195%;
        left: -10%;
    }
    @media (min-width: 850px) and (max-width: 930px){
        top: 230%;
        left: -20%;
    }
    @media (min-width: 750px) and (max-width: 850px){
        top: 240%;
        left: -20%;
    }
    @media (min-width: 650px) and (max-width: 750px){
        top: 260%;
        left: -25%;
    }
    
`
export const Smalicontic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:500px){
        width: 150px;
    }
    @media (max-width:330px){
        width: 240px;
    }
    @media (max-width:350px){
        width: 240px;
    }
    @media (min-width:350px) and (max-width:400px){
        width: 270px;
    }
    @media (min-width: 440px) and (max-width: 470px){
        width: 139px;
    }
    @media (min-width: 401px) and (max-width:439px){
        width: 300px;
    }
    @media (min-width: 930px) and (max-width: 1150px){
        width: 260px;
    }
    @media (min-width: 850px) and (max-width: 930px){
        width: 240px;
    }
    @media (min-width: 750px) and (max-width: 850px){
        width: 210px;
    }
    @media (min-width: 650px) and (max-width: 750px){
        width: 185px;
    }
`
export const Iconstext = styled.h1`
    font-family: 'Play';
    font-weight: 700;
    font-size: 14px;
    line-height: 155.52%;
    color: #FFFFFF;
    text-align: start;
    width: 250px;
    display: flex;
    align-items: center;
    @media (max-width:500px){
        width: 500px;
        left: 0px;
        font-size: 12px;
    }
    @media (max-width:330px){
        width:200px;
        margin: 10px;
    }
    @media (max-width:350px){
        width:200px;
        margin: 15px;
    }
    @media (min-width: 350px) and (max-width: 400px){
        margin: 12px;
    }
`

export const Div = styled.div`
    width: 100%;
    height: 500px;




`


