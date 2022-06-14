import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 600px;
    color: white;
    @media (max-width: 2000px) {
        margin-top: 200px;
    }
    @media (max-width: 1300px) {
        margin-top: 800px;
    }
    @media screen and (max-width: 800px) {
        margin-top: -1400px;
    }
`
export const Strategies = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 1300px;
    @media screen and (max-width: 1030px) {
        transform: scale(0.8);
        padding-top: 1400px;
    }
    @media screen and (max-width: 830px) {
        transform: scale(0.6);
        padding-top: 1500px;
    }
    @media screen and (max-width: 630px) {
        transform: scale(0.5);
        padding-top: 1300px;
    }
    @media screen and (max-width: 525px) {
        transform: scale(0.4);
        padding-top: 1300px;
    }
    @media screen and (max-width: 420px) {
        transform: scale(0.3)  !important;
        padding-top: 1300px !important;
    }
`
export const StrategyTitle = styled.h1`
    color: white;
    font-size: 22px;
    line-height: 27px;
    font-weight: 600;
    padding: 20px 0px;
    @media (max-width: 1300px) {
        margin-left: 50px;
    }
    @media screen and (max-width: 420px) {
    margin-top: -50px;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
  }
`
export const StrategyText = styled.p`
    color: white;
    font-size: 17px;
    font-weight: 100;
    line-height: 27px;
    width: 350px;
    text-align: center;
    @media (max-width: 1300px) {
        margin-left: 50px;
    }
    @media screen and (max-width: 420px) {
    font-size: 30px;
    width: 700px;
    padding-top: 20px ;
    line-height: 40px;
  }
`
export const StrategyImageDiv = styled.div`
    position: relative;
    margin-bottom: 250px;
    @media (max-width: 1300px) {
        left: 50px;
    }
    
`
export const StrategyImage = styled.img`
    margin-top: 230px;
    width: 750px;
    

`
export const Text1 = styled.h1`       
    position: absolute;
    top: 130px;
    right: 600px;
    width: 300px;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 100;
`
export const Text2 = styled.h1`
    position: absolute;
    top: 140px;
    right: 330px;
    width: 250px;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 100;
`
export const Text3 = styled.h1`
    position: absolute;
    top: 170px;
    right: 130px;
    width: 180px;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 100;
`
export const Text4 = styled.h1`
    position: absolute;
    top: 165px;
    left: 650px;
    width: 180px;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 100;
`
export const Text5 = styled.h1`
    position: absolute;
    bottom: 770px;
    left: 20px;
    width: 250px;
    font-size: 11px;
    font-weight: 50;
`
export const Text6 = styled.h1`
    position: absolute;
    bottom: 700px;
    left:180px;
    width: 150px;
    font-size: 11px;
    font-weight: 50;
`
export const Text7 = styled.h1`
    position: absolute;
    bottom: 670px;
    left: 490px;
    width: 250px;
    font-size: 11px;
    font-weight: 50;
`
export const Text8 = styled.h1`
    position: absolute;
    bottom: 600px;
    left: 420px;
    width: 200px;
    font-size: 11px;
    font-weight: 50;
`
export const Text9 = styled.h1`
    position: absolute;
    bottom: 580px;
    left: 90px;
    width: 200px;
    font-size: 11px;
    font-weight: 50;
`
export const Text10 = styled.h1`
    position: absolute;
    bottom: 510px;
    left: 160px;
    width: 180px;
    font-size: 11px;
    font-weight: 50;
`
export const Text11 = styled.h1`
    position: absolute;
    bottom: 510px;
    left: 490px;
    width: 180px;
    font-size: 11px;
    font-weight: 50;
`
export const Text12 = styled.h1`
    position: absolute;
    bottom: 420px;
    left: 425px;
    width: 200px;
    font-size: 11px;
    font-weight: 50;
`
export const Text13 = styled.h1`
    position: absolute;
    bottom: 410px;
    left: 30px;
    text-align: right;
    width: 230px;
    font-size: 11px;
    font-weight: 50;
`
export const Text14 = styled.h1`
    position: absolute;
    bottom: 340px;
    left: 100px;
    text-align: right;
    width: 200px;
    font-size: 11px;
    font-weight: 50;
`
export const Text15 = styled.h1`
    position: absolute;
    bottom: 250px;
    left: 420px;
    width: 200px;
    font-size: 11px;
    font-weight: 50;
`
export const Text16 = styled.h1`
    position: absolute;
    bottom: 230px;
    left: 90px;
    text-align: right;
    width: 180px;
    font-size: 11px;
    font-weight: 50;
`
export const Text17 = styled.h1`
    position: absolute;
    bottom: 130px;
    left: 150px;
    text-align: right;
    width: 180px;
    font-size: 11px;
    font-weight: 50;
`
export const Text18 = styled.h1`
    position: absolute;
    bottom: 140px;
    left: 480px;
    width: 180px;
    font-size: 11px;
    font-weight: 50;
`
export const Text19 = styled.h1`
    position: absolute;
    bottom: 25px;
    left: 420px;
    width: 200px;
    font-size: 11px;
    font-weight: 50;
`
export const Text20 = styled.h1`
    position: absolute;
    bottom: 35px;
    left: 10px;
    text-align: right;
    width: 260px;
    font-size: 11px;
    font-weight: 50;
`
export const Text21 = styled.h1`
    position: absolute;
    top: 1330px;
    left: 150px;
    text-align: right;
    width: 180px;
    font-size: 11px;
    font-weight: 50;
`