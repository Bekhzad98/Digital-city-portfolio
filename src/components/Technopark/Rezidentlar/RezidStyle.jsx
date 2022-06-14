import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width:100%;
/* height: 100vh; */
background-repeat: no-repeat;
background-size: cover;
background-image: url(${props=>props.bg});
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen  and (max-width:1163px) {
   flex-direction: column;
  }
`
export const Onediv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* position: relative; */
  width: 291.33px;
  height: 245.74px;
  background: rgba(108, 99, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15.1339px;
  margin: 5rem 20px;
  transition: all 1s;

  &:hover{
    transform: scale(1.1);
    transition: all 1s;
    }

    div{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 120px;
    }

    @media screen  and (max-width:1163px) {
     flex-direction: column;
     margin: 2rem;
  }

`
export const Divimg = styled.img`
 /* width: 80px; */
 /* padding-bottom: 6rem; */


`
export const Divh2 = styled.h2`
  text-align: center;
  font-family: 'Play';
  font-weight: 700;
  /* width:230px; */
  font-size: 16px;
  color: #FFFFFF;color: #FFFFFF;
  padding-top: 20px;

`
export const Divp = styled.p`
  text-align: center;
  font-family: 'Play';
  font-weight: 700;
  width: 220px;
  font-size: 12px;
  line-height: 19px;
  color: #FFFFFF;
  padding-top: 20px;

`

export const Twodiv = styled.div`
  position: relative;
  width: 15rem;
  height: 14rem;
  background: rgba(108, 99, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15.1339px;
  margin: 20px 20px;
  justify-content: start;
  transition: all 1s;

&:hover{
  transform: scale(1.1);
  transition: all 1s;
  }


`
export const Div2img  = styled.img`
margin-top: -50px;
padding-left: 4rem;

`
export const Hh2 = styled.h2`
 text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;color: #FFFFFF;
`
export const Pp = styled.p`
  text-align: center;
  font-family: 'Play';
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
  padding-top: 10px;
`

export const Centerend = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  @media screen  and (max-width:1163px) {
    justify-content: center;
    text-align: center;
     flex-direction: column;
     margin: 0rem;
  }

`
export const Centerleft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  cursor: pointer;
  width: 45%;
  color: #fff;


  h1 {

    @media screen  and (max-width:1101px) {
      text-align: center;
  }

  }

  p {
    width: 90%;
    font-size:24px;

    @media screen  and (max-width:1101px) {
      text-align: center;
   }
    @media screen  and (max-width:400px) {
      width: 100%;
   }


  }


`
export const Endh1 = styled.h1`
  font-size: 24px;
  color: #FFFFFF;
  margin-top: 20px;
  position: absolute;


`
export const Endp = styled.p`
  font-size: 24px;
  color: #e0d8d8;
  position: absolute;
  width: 491px;
  height: 148px;
  margin-top: 5rem;

`
export const Centerright = styled.div`

`
export const Rightimg  = styled.img`
  cursor: pointer;

  @media screen  and (max-width:1163px) {
     margin: 2rem;
  }
`
