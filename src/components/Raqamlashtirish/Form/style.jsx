import styled from "styled-components";

import FormBgcImg from '../../../assets/images/raqamBG2.png'


export const MainDiv = styled.div`
    width: 100%;
    height: 903px;
    background-image: url(${FormBgcImg});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
`

export const CenterText = styled.h1`
    color: white;
    font-size: 22px;
    text-align: center;
    /* border: 1px solid blue; */
    padding: 20px;
    font-weight: 500;
`

export const FormDiv = styled.div`
    width: 32%;
    height: 770px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* max-width: 32%;
    min-width: 30%;
     */

    @media screen and (max-width:1268px) {
        height: 600px;
        width: 300px;
    }

    @media screen and (max-width:964px) {
        height: 500px;
    }

    @media screen and (max-width:528px) {
        height: 540px;
    }
`

export const ForstDiv = styled.div`
    width: 100%;
    height: 500px;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const SecondDiv = styled.div`
    width: 100%;
    height: 300px;
    border: #00ff99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* border: 1px solid red; */
    


`
export const SritsDiv = styled.div`
    width: 100%;
    height: 100px;
    /* border: 1px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InpDiv = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const TextFilledLable = styled.label`
    color: white;
    padding: 0px 0px 0px 5px;

    /* @media screen and (max-width:556px) {
        font-size: 13px;
    }

    /* @media screen and (max-width:444px) {
        font-size: 10px;
    } */ 
`

export const Inp = styled.input`
    width: 100%;
    height: 55px;
    background-color:#16161E ;
    border: 1px solid gray;
    outline: none;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    padding: 10px;
`

export const InpBigDiv = styled.label`
    width: 50px;
    height: 30px;
    color: white;
    /* border: 1px solid red; */
    padding: 5px;

    /* @media screen and (max-width:444px) {
        font-size: 10px;
    } */
`

export const InpBig = styled.textarea`
    width: 100%;
    height: 180px;
    background-color:#16161E ;
    border: 1px solid gray;
    outline: none;
    font-size: 20px;
    color: white;
    border-radius: 10px;
    padding: 10px;
`

export const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color:#6C63FF;
    color: white;
    border-radius: 25px;
    border: none;


    :hover{
        background-color: #322ca7;
        cursor: pointer;
    }

    @media screen and (max-width:950px) {
        height: 35px;
        width: 160px;
    }
`










