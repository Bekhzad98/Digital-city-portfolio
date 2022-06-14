import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg});
  cursor: pointer;
`
export const Righttop = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 0 7%;

  @media screen  and (max-width:990px) {
   flex-direction: column;
  }

`

export const Topleftdiv = styled.div`
height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-right:10%;


    @media screen  and (max-width:990px) {
      justify-content: center;
      align-items: center;
      padding-right: 0;
  }

    span{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 30px;


    @media screen  and (max-width:990px) {
      justify-content: center;
      align-items: center;
  }
    }

    @media screen  and (max-width:990px) {
   margin-top: 2rem;
   flex-direction: column;
  }
    @media screen  and (max-width:380px) {
   margin-top: 2rem;
   flex-direction: column;
   transform: scale(0.9);
  }

`
export const Topimg = styled.img`
 width: 40%;
 border-radius: 10px;
 margin-top: 0rem;

`
export const Divbutton = styled.div`
 padding: 5px 25px;
  border: none;
  background-color: color;
  border: 1px solid #FFFFFF;
  border-radius: 23.4043px;
  color: white;

`
export const Toph1 = styled.h1`
text-align: center;
/* width: 100%; */
height: 170px;
color: #ffff;
`
export const Topp = styled.p`
/* width: 80%; */
color: #ffff;
line-height: 30px;
/* margin-top: -7rem; */
/* word-break: break-all; */
text-align: center;

@media screen  and (max-width:990px) {
   flex-direction: column;
   width: 80%;
  }
`

export const Rightend = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 70%;

@media screen  and (max-width:990px) {
   margin-top: 3rem;
   flex-direction: column;
  }

`
export const Enddiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
margin-bottom: 0px;
`
export const Hh1 = styled.h1`
text-align: center;
color: #ffff;
`
export const Pp = styled.p`
  width: 70%;
  color: #ffff;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
`
export const Enddiv2 = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;

 @media screen  and (max-width:990px) {
   flex-direction: column;
   text-align: center;
  }

 `
 export const Div = styled.div`
  padding-left: 50px;

  @media screen  and (max-width:990px) {
   margin-top: 1rem;
   text-align: center;
   width: 100%;
   padding-left: 0;
  }

 `

export const Endimg = styled.img`
 width: 90%;
 height: 275px;
 border-radius: 10px;
 margin-top: 50px;
`
export const P2p = styled.p`
  width: 50%;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #FFFFFF;

  @media screen  and (max-width:990px) {
   margin-top: 1rem;
   text-align: center;
   width: 100%;
  }


`