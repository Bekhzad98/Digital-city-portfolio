import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 450px;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 800px) {
    transform: scale(0.7);
    /* margin-top: -290px;  */
    height: 2200px;
  }
  @media screen and (max-width: 560px) {
    transform: scale(0.5);
    /* margin-top: -400px; */
    height: 1850px;
  }
  @media screen and (max-width: 400px) {
    transform: scale(0.4);
    /* margin-top: -450px; */
    height: 1550px;
  }
`;
export const InfraTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 27px;
  padding-top: 120px;
  color: white;
  font-weight: 600;
  padding-bottom: 50px;
  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
  @media screen and (max-width: 560px) {
    font-size: 40px;
  }
`;
export const InfraTitle2 = styled.div`
  position: absolute;
  top: -70px;
  
  font-size: 130px;
  padding-top: 120px;
  color: #ffffff15;
  font-weight: 600;
  padding-bottom: 50px;
  @media (max-width:850px){
    font-size: 80px;
    top: -40px;
  }
  @media screen and (max-width: 800px) {
    top: -30px;
  }
  @media screen and (max-width: 400px) {
    font-size: 100px;
    top: -40px;
  }
 
`;
export const InfraDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  
  @media (max-width:1300px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 420px) {
    transform: scale(0.9);
  }
  @media screen and (max-width: 350px){
    transform: scale(0.9);
  }
`;
export const InfraLeft = styled.div`
  margin-left: 180px;
  @media (max-width: 1300px) {
    margin-right: 150px;
  }
`
export const H1Head = styled.h1`
  color: white;
  font-size: 22px;
  line-height: 27px;
  font-weight: 600;
  padding: 10px 0px;
  @media screen and (max-width: 420px) {
    font-size: 40px;
  }
  
`;
export const PHead = styled.h1`
  color: white;
  font-size: 17px;
  font-weight: 100;
  line-height: 27px;
  width: 450px;
  @media screen and (max-width: 420px) {
    font-size: 25px;
    width: 700px;
    padding-top: 20px ;
    line-height: 30px;
  }
`;
export const InfraRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 150px;
  
  @media (max-width:1300px) {
    margin-left: 800px;
    margin-top: 300px;
  }
`
export const MapBackground = styled.img`
  position: absolute;
  right: 6px;
  @media (max-width:970px){
      width:340px;
      right: 150px;
      box-sizing: border-box;
  }
`;
export const MapItems = styled.div`
  position: relative;
  right: 40px;
  top: -200px;
  box-sizing: border-box;
  
`;
export const MapItem1 = styled.img`
  position: absolute;
  right: 392px;
  top: -15px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 125px;
      right: 365px;
      box-sizing: border-box;
      top: -5px;
  }
`;
export const MapItem2 = styled.img`
  position: absolute;
  right: 393px;
  top: 164px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 46px;
      right: 366px;
      box-sizing: border-box;
      top: 90px;
      
  }
`;
export const MapItem3 = styled.img`
  position: absolute;
  right: 287px;
  top: 190px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 65px;
      right: 307px;
      box-sizing: border-box;
      top: 103px;
  }
`;
export const MapItem4 = styled.img`
  position: absolute;
  right: 236px;
  top: 76px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 100px;
      right: 280px;
      box-sizing: border-box;
      top: 42px;
  }
`;
export const MapItem5 = styled.img`
  position: absolute;
  right: 204px;
  top: 282px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 67px;
      right: 261.5px;
      box-sizing: border-box;
      top: 153.5px;
  }
`;
export const MapItem6 = styled.img`
  position: absolute;
  right: 211px;
  top: 230px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 48px;
      right: 266px;
      box-sizing: border-box;
      top: 125px;
  }
`;
export const MapItem7 = styled.img`
  position: absolute;
  right: 179px;
  top: 305px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 37px;
      right: 249px;
      box-sizing: border-box;
      top: 167px;
  }
`;
export const MapItem8 = styled.img`
  position: absolute;
  right: 157px;
  top: 200px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 47px;
      right: 237px;
      box-sizing: border-box;
      top: 109px;
  }
`;
export const MapItem9 = styled.img`
  position: absolute;
  right: 153px;
  top: 211px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 20px;
      right: 235px;
      box-sizing: border-box;
      top: 115.5px;
  }
`;
export const MapItem10 = styled.img`
  position: absolute;
  right: 75px;
  top: 150px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 45px;
      right: 198px;
      box-sizing: border-box;
      top: 89px;
  }
`;
export const MapItem11 = styled.img`
  position: absolute;
  right: 40px;
  top: 186px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 35px;
      right: 179px;
      box-sizing: border-box;
      top: 105px;
  }
`;
export const MapItem12 = styled.img`
  position: absolute;
  right: 40px;
  top: 224px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 35px;
      right: 180px;
      box-sizing: border-box;
      top: 125px;
  }
`;
export const MapItem13 = styled.img`
  position: absolute;
  right: 7px;
  top: 210px;

  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
      width: 35px;
      right: 157px;
      box-sizing: border-box;
      top: 117px;
  }
`;
export const Loc1 = styled.img`
  position: absolute;
  right: 570px;
  top: 30px;
  @media (max-width: 970px) {
      width: 15px;
      top: 15px;
      box-sizing: border-box;
      right: 450px;
  }
`;
export const Loc2 = styled.img`
  position: absolute;
  right: 570px;
  top: 115px;
  @media (max-width: 970px) {
      width: 15px;
      top: 50px;
      box-sizing: border-box;
      right: 460px;
  }
`;
export const Loc3 = styled.img`
  position: absolute;
  right: 480px;
  top: 60px;
  @media (max-width: 970px) {
      width: 15px;
      top: 40px;
      box-sizing: border-box;
      right: 390px;
  }
`;
export const Loc4 = styled.img`
  position: absolute;
  right: 430px;
  top: 120px;
  @media (max-width: 970px) {
      width: 15px;
      top: 65px;
      box-sizing: border-box;
      right: 380px;
  }
`;
export const Loc5 = styled.img`
  position: absolute;
  right: 330px;
  top: 90px;
  @media (max-width: 970px) {
      width: 15px;
      top: 75px;
      box-sizing: border-box;
      right: 340px;
  }
`;
export const Loc6 = styled.img`
  position: absolute;
  right: 280px;
  top: 140px;
  @media (max-width: 970px) {
      width: 15px;
      top: 90px;
      box-sizing: border-box;
      right: 300px;
  }
`;
export const Loc7 = styled.img`
  position: absolute;
  right: 370px;
  top: 130px;
  @media (max-width: 970px) {
      width: 15px;
      top: 120px;
      box-sizing: border-box;
      right: 340px;
  }
`;
export const Loc8 = styled.img`
  position: absolute;
  right: 350px;
  top: 220px;
  @media (max-width: 970px) {
      width: 15px;
      top: 150px;
      box-sizing: border-box;
      right: 290px;
  }
`;
export const Loc9 = styled.img`
  position: absolute;
  right: 280px;
  top: 300px;
  @media (max-width: 970px) {
      width: 15px;
      top: 120px;
      box-sizing: border-box;
      right: 280px;
  }
`;
export const Loc10 = styled.img`
  position: absolute;
  right: 200px;
  top: 330px;
  @media (max-width: 970px) {
      width: 15px;
      top: 110px;
      box-sizing: border-box;
      right: 260px;
  }
`;
export const Loc11 = styled.img`
  position: absolute;
  right: 250px;
  top: 250px;
  @media (max-width: 970px) {
      width: 15px;
      top: 180px;
      box-sizing: border-box;
      right: 260px;
  }
`;
export const Loc12 = styled.img`
  position: absolute;
  right: 210px;
  top: 220px;
  @media (max-width: 970px) {
      width: 15px;
      top: 110px;
      box-sizing: border-box;
      right: 235px;
  }
`;
export const Loc13 = styled.img`
  position: absolute;
  right: 160px;
  top: 220px;
  @media (max-width: 970px) {
      width: 15px;
      top: 100px;
      box-sizing: border-box;
      right: 215px;
  }
`;
export const Loc14 = styled.img`
  position: absolute;
  right: 110px;
  top: 180px;
  @media (max-width: 970px) {
      width: 15px;
      top: 110px;
      box-sizing: border-box;
      right: 190px;
  }
`;
export const Loc15 = styled.img`
  position: absolute;
  right: 60px;
  top: 210px;
  @media (max-width: 970px) {
      width: 15px;
      top: 105px;
      box-sizing: border-box;
      right: 170px;
  }
`
export const Loc16 = styled.img`
  position: absolute;
  right: 30px;
  top: 190px;
  @media (max-width: 970px) {
      width: 15px;
      top: 50px;
      box-sizing: border-box;
      right: 320px;
  }
`;
export const Number = styled.h1`
  
  color: white;
  font-size: 30px;
  font-family: 'Montserrat';
  font-weight: 300;
  padding-right: 100px;
  padding-top: 200px;
  text-align: right;
`;

//IT companies

export const CompaniesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px 80px;
  @media (max-width: 970px) {
    flex-direction: column;
  }
`;
export const CompaniesLeft = styled.div`
  position: relative;
  @media (max-width: 970px) {
    margin-top: 50px;
  }
  
`;
export const CompaniesLeftImg = styled.img`
  width: 400px;
  height: 550px;
  @media (max-width: 970px) {
    width: 300px;
    height: 450px;
  }
`;
export const CompaniesDigits10 = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  top: 40px;
  left: 280px;
  @media (max-width: 970px) {
    top: 30px;
    left: 210px;
  }
`;
export const CompaniesDigits11 = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 30px;
  position: absolute;
  top: 70px;
  left: 268px;
  @media (max-width: 970px) {
    top: 50px;
    left: 200px;
  }
`;
export const CompaniesDigits20 = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  top: 160px;
  left: 45px;
  @media (max-width: 970px) {
    top: 125px;
    left: 40px;
  }
`;
export const CompaniesDigits21 = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 30px;
  position: absolute;
  top: 190px;
  left: 37px;
  @media (max-width: 970px) {
    top: 150px;
    left: 25px;
  }
`;
export const CompaniesDigits30 = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  top: 295px;
  left: 290px;
  @media (max-width: 970px) {
    top: 250px;
    left: 220px;
  }
`;
export const CompaniesDigits31 = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 30px;
  position: absolute;
  top: 325px;
  left: 290px;
  @media (max-width: 970px) {
    top: 270px;
    left: 220px;
  }
`;
export const CompaniesDigits40 = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  top: 440px;
  left: 60px;
  @media (max-width: 970px) {
    top: 360px;
    left: 50px;
  }
`;
export const CompaniesDigits41 = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 30px;
  position: absolute;
  top: 470px;
  left: 55px;
  @media (max-width: 970px) {
    top: 385px;
    left: 45px;
  }
`;
export const CompaniesRight = styled.div`
  margin-bottom: 120px;
  margin-top: 100px ;
`;
export const CentersTitle = styled.h1`
  color: white;
  font-size: 22px;
  line-height: 27px;
  font-weight: 600;
  padding: 10px 0px;
  @media (max-width: 800px) {
    margin-top: 100px ;
    text-align: center;
  }
  @media screen and (max-width: 1200px) {
    text-align: center;
  }
  @media screen and (max-width: 420px) {
    margin-top: -50px;
    font-size: 40px;
  }
`;
export const CentersText = styled.p`
  color: white;
  font-size: 17px;
  font-weight: 100;
  line-height: 27px;
  width: 370px;
  @media (max-width: 800px) {
    text-align: center;
    text-align: center;
  }
  @media screen and (max-width: 1200px) {
    text-align: center;
  }
  @media screen and (max-width: 420px) {
    font-size: 25px;
    width: 600px;
    padding-top: 20px ;
    line-height: 30px;
  }
`;
export const Texnopark = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 100px 150px;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
export const TexnoparkLeft = styled.div`

`;
export const TexnoparkTitle = styled.div`
  color: white;
  font-size: 22px;
  line-height: 27px;
  font-weight: 600;
  padding: 10px 0px;
  @media screen and (max-width: 420px) {
    margin-top: 50px;
    font-size: 40px;
  }
`;
export const TexnoparkText = styled.div`
  color: white;
  font-size: 17px;
  font-weight: 100;
  line-height: 27px;
  width: 400px;
  @media screen and (max-width: 420px) {
    font-size: 25px;
    width: 700px;
    padding-top: 20px ;
    line-height: 30px;
  }
`;
export const TexnoparkRight = styled.div`
  @media (max-width:1200px) {
    margin-top: 100px;
  }
`;
export const AndijanMapBg = styled.img`
  @media (max-width: 970px) {
    width: 340px;
    margin-left: -100px;
  }
`;
export const AndijanMap = styled.div`
  margin-top: -20px;
  position: relative;
  @media (max-width: 1200px) {
    left: 50px;
  }
  
  
`;
export const AndijanMap1 = styled.img`
  position: absolute;
  left: 0px;
  top: 70px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 80px;
    top: 40px;
    left: -100px;
  }
`;
export const AndijanMap2 = styled.img`
  position: absolute;
  left: 126px;
  top: 128px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 40px;
    top: 70.5px;
    left: -33px;
  }
`;
export const AndijanMap3 = styled.img`
  position: absolute;
  left: 97px;
  top: 60px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 98px;
    top: 35.5px;
    left: -47px;
  }
`;
export const AndijanMap4 = styled.img`
  position: absolute;
  left: 160px;
  top: 108px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 51px;
    height: 64px;
    top: 60px;
    left: -15px;
  }
`;
export const AndijanMap5 = styled.img`
  position: absolute;
  left: 180px;
  top: 98px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 75px;
    height: 31px;
    top: 55px;
    left: -5px;
  }
`;
export const AndijanMap6 = styled.img`
  position: absolute;
  left: 220px;
  top: 139px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 62px;
    height: 62px;
    top: 77px;
    left: 14.5px;
  }
`;
export const AndijanMap7 = styled.img`
  position: absolute;
  left: 266px;
  top: 205px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 58px;
    top: 113px;
    left: 37.5px;
  }
`;
export const AndijanMap8 = styled.img`
  position: absolute;
  left: 236px;
  top: 3px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 62px;
    top: 9px;
    left: 24.5px;
  }
`;
export const AndijanMap9 = styled.img`
  position: absolute;
  left: 307px;
  top: -15px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 57px;
    top: 0px;
    left: 57px;
  }
`;
export const AndijanMap10 = styled.img`
  position: absolute;
  left: 309px;
  top: 65px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 53px;
    height: 69px;
    top: 39px;
    left: 60px;
  }
`;
export const AndijanMap11 = styled.img`
  position: absolute;
  left: 326px;
  top: 174px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 55px;
    height: 35px;
    top: 98px;
    left: 66.5px;
  }
`;
export const AndijanMap12 = styled.img`
  position: absolute;
  left: 350px;
  top: 154px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 74px;
    top: 86.5px;
    left: 79.5px;
  }
`;
export const AndijanMap13 = styled.img`
  position: absolute;
  left: 395px;
  top: 80px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 55px;
    top: 47px;
    left: 101px;
  }
`;
export const AndijanMap14 = styled.img`
  position: absolute;
  left: 408px;
  top: 70px;
  :hover {
    filter: invert(80%);
    transition: 0.3s;
  }
  @media (max-width: 970px) {
    width: 117px;
    height: 66px;
    top: 43px;
    left: 109px;
  }
`;
export const AndLoc1 = styled.img`
  position: absolute;
  top: 120px;
  right: 100px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 70px;
    right: 60px;
  }
`;
export const AndLoc2 = styled.img`
  position: absolute;
  top: 110px;
  right: 170px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 60px;
    right: 100px;
  }
`;
export const AndLoc3 = styled.img`
  position: absolute;
  top: 170px;
  right: 200px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 98px;
    right: 110px;
  }
`;
export const AndLoc4 = styled.img`
  position: absolute;
  top: 50px;
  right: 220px;
  width: 100px;
  height: 75px;
  @media screen and (max-width: 970px) {
    width: 40px;
    height: 40px;
    top: 40px;
    right: 135px;
  }
`;
export const AndLoc5 = styled.img`
  position: absolute;
  top: 0px;
  right: 260px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 10px;
    right: 150px;
  }
`;
export const AndLoc6 = styled.img`
  position: absolute;
  top: 240px;
  right: 300px;
  @media screen and (max-width: 970px) {
    width: 30px;
    top: 20px;
    right: 175px;
  }
`;
export const AndLoc7 = styled.img`
  position: absolute;
  top: 180px;
  right: 320px;
  @media screen and (max-width: 970px) {
    width: 30px;
    top: 30px;
    right: 240px;
  }
`;
export const AndLoc8 = styled.img`
  position: absolute;
  top: 110px;
  right: 350px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 55px;
    right: 200px;
  }
`;
export const AndLoc9 = styled.img`
  position: absolute;
  top: 40px;
  right: 320px;
  width: 55px;
  height: 50px;
  @media screen and (max-width: 970px) {
    width: 30px;
    top: 40px;
    right: 280px;
  }
`;
export const AndLoc10 = styled.img`
  position: absolute;
  top: 60px;
  left: 130px;
  width: 55px;
  height: 50px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 70px;
    left: 5px;
  }
`;
export const AndLoc11 = styled.img`
  position: absolute;
  top: 170px;
  left: 200px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 80px;
    left: -25px;
  }
`;
export const AndLoc12 = styled.img`
  position: absolute;
  top: 145px;
  left: 130px;
  width: 58px;
  height: 53px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 80px;
    left: 35px;
  }
`;
export const AndLoc13 = styled.img`
  position: absolute;
  top: 100px;
  left: 60px;
  width: 58px;
  height: 53px;
  @media screen and (max-width: 970px) {
    width: 20px;
    top: 120px;
    left: 65px;
  }
`;
