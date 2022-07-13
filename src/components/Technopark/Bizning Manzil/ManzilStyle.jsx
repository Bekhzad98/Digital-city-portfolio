import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props=>props.bg});

`
export const Centertop = styled.div`
 display: flex;
 justify-content:center;
 align-items: center;
 margin-top: 2rem;
 width: 80%;
 height: 500px;

 @media screen  and (max-width:1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    margin-top: 7rem;
  }

`
export const Topimg = styled.img`
  border-radius: 15px;
  /* width: 35%; */
  width: 50%;
  height: 80%;

  @media screen  and (max-width:1000px) {
      width: 70%;
    }
    @media screen  and (max-width:800px) {
        width: 100%;
    }

  `
export const Topp = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  margin-top: 0rem;
  color: #FFFFFF;
  width: 100%;


  @media screen  and (max-width:1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    width: 100%;
    }

  `
  export const Topbutton = styled.div`
    background: rgba(108, 99, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;

    @media screen  and (max-width:1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
    }
    @media screen  and (max-width:800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    `
    export const Centerend = styled.div`
      width: 80%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items:center;
      margin-top: 3rem;


    @media screen  and (max-width:1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 8rem;
    }

    `
