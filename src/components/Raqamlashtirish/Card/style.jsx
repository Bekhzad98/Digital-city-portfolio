import styled from "styled-components";

//Import Image
import DcBgcImg from '../../../assets/images/raqamBG2.png'


export const MainDiv = styled.div`
    width: 100%;
    background-image: url(${DcBgcImg});
    background-size: cover;
    background-repeat: no-repeat;
 
`

export const APIDiv = styled.div`
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    top: 800px;
`

export const APIcentrdiv = styled.div`
    width: 50%;
    height: 903px;
    justify-content:center;
    /* border: 1px solid white; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    /* grid-row-gap: 100px; */
    margin-top: -90px;
    @media (max-width:1000px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        grid-row-gap: 25px;

    }

    @media (max-width:725px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

`

export const CardDiv = styled.div`
    width: 351.47px;
    height: 265px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;

    transition: 1s;

    &:hover{
        transition: 0.3s;
        transform: scale(1.1);
    }

    @media (max-width:728px) {
        width: 280px;
    }

    @media (max-width:571px) {
        width: 250px;
    }

    @media (max-width:514px) {
        width: 230px;
        height: 230px;
    }

    @media (max-width:527px) {
        width: 200px;
        height: 210px;
    }

    @media (max-width:415px) {
        width: 180px;
        height: 200px;
    }

`

export const CardStartDiv = styled.div`
    width: 100%;
    height: 30px;
    /* border: 1px solid black; */
    background-color: white;
`
export const CardText = styled.h3`
    width: 47%;
    background-color:#6C63FF;
    height: 100%;
    text-align: center;
    /* border: 1px solid black; */

    @media (max-width:728px) {
        width: 45%;
    }
/* 
    @media (max-width:571px) {
        width: 38%;
    }

    @media (max-width:527px) {
        width:50%;
    } */
`

export const CardImg = styled.img`
    width: 100%;
    display:flex;
    justify-content:center;
    height: 202.03px;
    /* border: 1px solid darkblue; */
    object-fit: contain;
    background-color: #fff;
`

export const CardEndDiv = styled.div`
    width: 100%;
    height: 30px;
    /* border: 1px solid black; */
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

// export const TextFilledLable = styled.label`
//     color: white;
// `
