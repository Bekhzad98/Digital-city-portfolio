import styled from "styled-components";

 // MUI ICONSLARNI CHAQIRIB OLINYAPTI
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width:100%;
/* height: 100vh; */
background-repeat: no-repeat;
background-size: cover;
background-image: url(${props=>props.bg});

`

export const Centerright = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: white;
  margin-top: 20rem;
  cursor: pointer;
  transition: 1.3s;
  position: fixed;
  z-index: 1000;
  right:0;
  border-radius: 50px;
  width: 70px;
  height: 70px;


  background: rgba(255, 255, 255, 0.1);

  &:hover{
    transform: rotateY(360deg);
    cursor: pointer;
    color: aquamarine;
  }

  @media screen  and (max-width:590px) {
   transform: scale(0.8) !important;
   right: 0;
  }
  @media screen  and (max-width:550px) {
   transform: scale(0.6) !important;
   right: 0;
  }
  @media screen  and (max-width:522px) {
    right: 0;
    transform: scale(0.5) !important;
  }

`
export const Centphone = styled(LocalPhoneIcon)`
 font-weight: 700;
 color: white;
 margin-right: 0px;
 margin-top: 0px;
 width: 20px !important;
`
export const Numberh1 = styled.h1`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 20px;
  color: #d4d0d0 !important;
  margin: 0px 0px;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10rem;

  @media screen  and (max-width:440px) {
    transform:scale(0.9) !important;
  }
  @media screen  and (max-width:395px) {
    transform:scale(0.8) !important;
  }
    @media screen  and (max-width:355px) {
      transform:scale(0.7) !important;
  }

`
export const Texdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0rem;
  word-break: break-all;
  width: 100%;
`
export const Texnoparkdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 174px;
  left: 0rem;
  top: 7rem;
  font-weight: 700;
  font-size: 141.724px;
  color: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;

  @media screen  and (max-width:1503px) {
    text-align: center !important;
    font-size: 100.724px !important;
  }
  @media screen  and (max-width:620px) {
    top: 6.50rem !important;
    font-size: 80.724px !important;
  }
  @media screen  and (max-width:500px) {
    font-size: 70.724px !important;
  }

`

export const H3 = styled.h3`
 position: relative;
 font-weight: 700;
 font-size: 45px;
 color: #ffffff;
 word-break: break-all;

 &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
    }

  @media screen  and (max-width:780px) {
    font-size: 40px !important;
  }
  @media screen  and (max-width:560px) {
    font-size: 35px !important;
  }
  @media screen  and (max-width:553px) {
    font-size: 30px !important;
  }

`
export const H1 = styled.h1`
  font-weight: 700;
  font-size: 70px;
  color: #ffffff;
  margin-top: 20px;
  word-break: break-all;

  &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
    }

    @media screen  and (max-width:533px) {
     font-size: 60px !important;
  }
    @media screen  and (max-width:495px) {
     font-size: 55px !important;
  }
`
export const Hp = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  color: #ffffff;
  margin-top: 20px;
  word-break: break-all;

   &:hover{
    transform: scale(1.1);
    color: gray;
    transition: all 0.5s;
  }

  @media screen  and (max-width:1172px) {
     width: 650px !important;
  }
  @media screen  and (max-width:870px) {
     width: 500px !important;
  }
  @media screen  and (max-width:510px) {
     width: 400px !important;
     font-size: 40px !important;
  }
  /* @media screen  and (max-width:500px) {
     width: 400px !important;
     font-size: 40px !important;
  } */
`

export const Centerleft = styled.div`
position: fixed;
z-index: 1000;
left: 20px;

@media screen  and (max-width:1440px) {
    left: 2rem !important;
}
@media screen  and (max-width:800px) {
    display: none !important;
}

`

//Div ICon start
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding-left: 2px;
  padding-top: 0px;
  margin-top: 20px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #ff6600;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 40px;
    width: 40px;
   }
    @media screen  and (max-width:352px) {
    height: 30px;
    width: 30px;
   }
`

export const Div2 = styled.div`
  width: 50px;
  height: 50px;
  padding-left: 0px;
  text-align: center !important;
  padding-top: 5px;
  margin-top: 20px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #ff6600;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 40px;
    width: 40px;
  }
  @media screen  and (max-width:352px) {
    height: 30px;
    width: 30px;
   }
`
export const Div3 = styled.div`
  width: 50px;
  height: 50px;
  padding-left: 6px;
  padding-top: 7px;
  margin-top: 20px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #ff6600;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 40px;
    width: 40px;
  }
  @media screen  and (max-width:352px) {
    height: 30px;
    width: 30px;
   }

`
export const Div4 = styled.div`
  width: 50px;
  height: 50px;
  padding-left: 7px;
  padding-top: 7px;
  margin-top: 20px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #ff6600;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 40px;
    width: 40px;
  }
  @media screen  and (max-width:352px) {
    height: 30px;
    width: 30px;
   }

`
export const MenuIcon = styled(DashboardCustomizeIcon)`
  color: #ffffff;
  width: 45px !important;
  font-size: 35px !important;
  transition: all 0.5s;
  text-align: center !important;

  &:hover{
    transform: scale(1.1);
    color: aqua;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 28px !important;
    width: 30px !important;
  }
    @media screen  and (max-width:352px) {
    height: 20px !important;
    width: 20px !important;
  }
`
export const MenuIcon2 = styled(CleanHandsIcon)`
 color: white;
 width: 35px !important;
 font-size: 35px !important;

 &:hover{
    transform: scale(1.1);
    color: aqua;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 28px !important;
    width: 30px !important;
  }
  @media screen  and (max-width:352px) {
    height: 20px !important;
    width: 20px !important;
  }

`
export const MenuIcon3 = styled(RocketLaunchIcon)`
 color: white;
 font-size: 35px !important;

 &:hover{
    transform: scale(1.1);
    color: aqua;
    transition: all 0.5s;
    }

    @media screen  and (max-width:636px) {
    height: 28px !important;
    width: 30px !important;
  }
  @media screen  and (max-width:352px) {
    height: 20px !important;
    width: 20px !important;
  }
`
export const MenuIcon4 = styled(LocalPhoneIcon)`
 color: white;
 width: 25px !important;

 &:hover{
    transform: scale(1.1);
    color: aqua;
    transition: all 0.5s;

    }
  @media screen  and (max-width:636px) {
  height: 28px !important;
   width: 30px !important;
}
@media screen  and (max-width:352px) {
    height: 20px !important;
    width: 20px !important;
  }

`
 //Div ICon end
