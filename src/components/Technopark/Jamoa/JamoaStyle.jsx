import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg});
`
export const Divleft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const Divright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-left: 0rem;
  cursor: pointer;

@media screen  and (max-width:1140px) {
  margin-top: 0rem;
}

`
export const Divh1 = styled.h1`
text-align: center;
color: #ffff;

@media screen  and (max-width:1140px) {
 /* font-size: 36px; */
}
`
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

@media screen  and (max-width:1140px) {
   align-items: center;
   justify-content: center;
   flex-direction: column;
}
`
export const Divp = styled.p`
  color: #ffff;
  font-weight: 400;
  font-size: 24px;
  margin-top: 20px;

@media screen  and (max-width:1140px) {
  margin-top: 16px;
  /* font-size: 32px; */
}

@media screen  and (max-width:555px) {
 margin-top: 16px;
}

`
export const Divimg = styled.img`
  width: 100%;
  border-radius: 10px;

 @media screen  and (max-width:1140px) {
  width: 80%;
  margin-top: 1rem;
  text-align: center;
  margin-left: 0;
  }

`
export const Leftp = styled.p`
  margin-left: 0rem;
  color: #ffff;
  line-height: 30px;

    @media screen  and (max-width:1140px) {
    margin-top: 1rem;
    text-align: center;
    width: 78%;

  }

`