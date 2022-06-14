import styled from "styled-components";


import phone12 from "../Ofis/Phone/12.png"

export const Container = styled.div`
  width:100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg});
`

export const Contcenter = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  /* padding: 0 20%; */
  margin-top: 5rem;
  transition: 3s;

  &:hover{
    transform: rotateX(360deg);
    cursor: pointer;
    color: aquamarine;
  }


  @media screen  and (max-width:1148px) {

  }
  @media screen  and (max-width:1096px) {
   margin-top: 15rem;
   padding-left:0;
  }

 `
 export const Contdiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   /* position: absolute; */

  @media screen  and (max-width:1096px) {
    transform: rotate(270deg);
  }
 `

export const Centerh1 = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: #FFFFFF;


`
export const Centerh11 = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: #FFFFFF;

`
export const Centerh3 = styled.h2`
  font-family: 'Play';
  margin-top: 5px;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  width: 200px;

   @media screen  and (max-width:1037px) {
   /* transform: scale(0.9); */
  }
`

export const Centerdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 400px;
  /* width: 100%; */
  /* position: relative; */
  background: url(${phone12});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen  and (max-width:1096px) {
    justify-content: center;
    text-align: center;
    transform: rotate(450deg);
  }

`
export const Centerimg = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70%;


`

export const ContcenterApp = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 13rem;

  @media screen  and (max-width:1096px) {

  }
`

export const Centerimg4 = styled.img`
  position: absolute;
  width: 70%;
`
export const Contend = styled.div`
  position: relative;
  width: 250px;
  height: 120px;
  background: rgba(108, 99, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
  border: none;

  @media screen  and (max-width:1120px) {
     margin-top: 20px;
  }

`
export const Contend1 = styled.div`
  position: relative;
  width: 250px;
  height: 120px;
  margin: 0 20px;
  background: rgba(108, 99, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
  border: none;

  @media screen  and (max-width:1121px) {
     margin-top: 1.20rem;
  }

  @media screen  and (max-width:900px) {
    width: 50%;
    flex-direction: column;
  }
`

export const Enddiv = styled.div`
display: flex;
justify-content: center;
padding-top: 10px;

@media screen  and (max-width:653px) {
    width: 100%;
  }
`
export const Endimg = styled.img`
position: absolute;
padding-top: 10px;
padding-right: 17px;
padding-left: 5px;
width: 60px;
`
export const Endp = styled.p`
margin-top: 5rem;
color: #ffff;
font-size: 14px;
padding-right: 0px;
position: absolute;
text-align: center;

@media screen  and (max-width:500px) {
  padding-right: 0;
}
`
export const End = styled.div`
  display: flex;
  background: rgba(108, 99, 255, 0.5);
  border-radius: 5px;
  width: 50px;
  height: 55px;
`
export const Centerend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 0rem;


  @media screen  and (max-width:1237px) {
    margin-bottom: 3rem;
  }
  @media screen  and (max-width:1096px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0;
    margin-top: 15rem;
  }

`
export const Centerleftright = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 0rem;
   cursor: pointer;

   @media screen  and (max-width:1243px) {
    left: 0rem;
    margin-top: 0rem;
    margin-bottom:0;
  }

  @media screen  and (max-width:1096px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
