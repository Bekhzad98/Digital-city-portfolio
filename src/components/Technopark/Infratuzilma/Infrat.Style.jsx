import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg});
  cursor: pointer;
`
export const Centertop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;

 @media screen  and (max-width:1166px) {
    flex-direction:column;
  }
  @media screen  and (max-width:1166px) {
      transform: scale(0.8);
    }
  @media screen  and (max-width:352px) {
      transform: scale(0.7);
    }

`
export const Topimg= styled.img`
  width: 100%;

 `
export const Topp = styled.p`
  font-size: 24px;
  color: #FFFFFF;
  margin-left: 5rem;
  line-height: 28px;

  @media screen  and (max-width:1166px) {
    text-align: center;
    flex-direction:column;
    margin-top: 2rem;
    margin-left:0
  }

  `
  export const Centerend = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8rem;
    width: 50%;

    @media screen  and (max-width:1166px) {
    text-align: center;
    flex-direction:column;
    margin-top: 0rem;
  }

  `
  export const Endh1 = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    color: #ffff;
  `
  export const Endp = styled.p`
    text-align: center;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 28px;
    margin-top: 20px;
  `