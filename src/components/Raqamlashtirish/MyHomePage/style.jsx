import styled from "styled-components";

//Ipmort Images
import DcBgcImg from '../../../assets/images/raqamBG.png'


// import Icons
import MenuIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import HendsIcon from '@mui/icons-material/CleanHandsSharp';
import RocketIcon from '@mui/icons-material/RocketLaunchOutlined';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';


export const MainDiv = styled.div`
    width: 100%;
    height: 903px;
    background-image: url(${DcBgcImg});
    background-size: cover;
    /* background-repeat: no-repeat; */
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NavbarDiv = styled.div`
    width: 100%;
    height: 10%;
`

export const SpaceCenterDiv = styled.div`
    width: 90%;
    height: 700px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
`

export const BlurText = styled.div`
    width: 80%;
    height: 180px;
    /* border: 1px solid yellow; */
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: rgba(255, 255, 255, 0.04);
    position: relative;
    font-weight: 700;

    @media screen and (max-width:1130px) {
        font-size: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width:750px) {
        font-size: 50px;
    }

    @media (max-width:762px) {
        font-size: 50px;
    }

    @media (max-width:547px) {
        font-size: 40px;
    }
`

export const CenterText = styled.h2`
    color: white;
    position: absolute;
    font-size: 28px;
    bottom: 35px;
    

    @media screen and (max-width:1138px){
        bottom: 70px;
    }

    @media screen and (max-width:765px){
        font-size: 20px;
        bottom: 75px;
    }
`

export const ReferenceDiv = styled.div`
    width: 100%;
    height: 500px;
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen  and (max-width:1300px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    }
`



export const LI = styled.li`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    /* border: 1px solid red; */

    

`

export const MenuIconn = styled(MenuIcon)`
    cursor: pointer;
    color: white !important;
    font-size: 30px !important;
`
export const HendsIconn = styled(HendsIcon)`
    cursor: pointer;color:
    white !important;
    font-size: 30px !important;
`
export const RocketIconn = styled(RocketIcon)`
    cursor: pointer;color: 
    white !important;
    font-size: 30px !important;
`
export const PhoneIconn = styled(PhoneIcon)`
    cursor: pointer;
    color: white !important;
    font-size: 30px !important;
`

export const ParagrafDiv = styled.div`
    width: 48%;
    height: 260px;
    /* border: 1px solid red; */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    @media screen and (max-width:786px) {
        width: 350px;
    }

    @media screen and (max-width:366px) {
        width: 300px;
    }
`

export const ParagrafText = styled.h1`
    color:wheat;
    width: 528px;
    height: 50%;
    font-size: 20px;
    line-height: 135.2%;
    font-weight: 400;
    /* border: 1px solid black; */

    @media screen and (max-width:1300px){
        margin-bottom: 30px;
    }

    @media screen and (max-width:1136px){
        font-size: 18px;

    }

    @media screen and (max-width:1018px){
        font-size: 16px;
    }

    @media screen and (max-width:804px){
        margin-bottom: 40px;
        height: 150px;
    }

    @media screen and (max-width:786px) {
        width: 100%;
    }

    @media screen and (max-width:560px){
        height: 170px;
    }
`

export const ImageDiv = styled.div`
    width: 48%;
    height: 350px;
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
    align-items: center;

    /* @media screen and (max-width:1388px) {
        display: none;
    } */
`

export const ImageLaptop = styled.img`
    width: 359px;
    height: 257px;
    transition: 1s;

    &:hover{
        transition: 0.3s;
        transform: scale(1.1);
    }

    @media screen and (max-width:810px) {
        width: 300px;
        height: 200px;
    }

    @media screen and (max-width:652px) {
        width: 270px;
        height: 170px;
    }

    
    
`

export const Tel = styled.h1`
    width: 160px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: white;
    font-weight: 400;
    bottom: 0;
    right: 20px;
    position: fixed;

    :hover{
        color: gold;
        cursor: pointer;
    }

    @media screen and (max-width:1151px) {
        display: none;
    }
`
