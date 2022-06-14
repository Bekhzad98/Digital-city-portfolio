import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 800px;
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    
`
export const ContainerOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1060px) {
        
    }
    @media screen and (max-width: 1032px) {
        margin-top: -300px;
    }
    @media screen and (max-width:820px) {
        margin-top: -600px;
        transform: scale(0.7);
    }
    @media screen and (max-width: 666px) {
        transform: scale(0.5);
        margin-top: -700px;
    }
    @media screen and (max-width: 620px) {
        margin-top: -800px;
    }
    @media screen and (max-width: 520px) {
        margin-top: -950px;
    }
    @media screen and (max-width: 420px) {
        margin-top: -1050px;
    }
`
export const CompaniesTitle = styled.h1`
    font-size: 27px;
    color: white;
    font-weight: 600;
    padding-bottom: 50px;
    @media screen and (max-width: 420px) {
        font-size: 38px;
        
  }
`
export const Companiestext = styled.p`
    
    
    text-align: center;
    color: white;
    font-size: 17px;
    font-weight: 100;
    line-height: 27px;
    width: 750px;
    @media screen and (max-width: 975px) {
        width: 500px;
    }
    @media screen and (max-width: 420px) {
    font-size: 25px;
    width: 600px;
    padding-top: 20px ;
    line-height: 30px;
  }
`
export const PostalServices = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 150px;
    @media screen and (max-width: 1350px) {
        flex-direction: column;
        transform: scale(0.8);
        margin: 0px;
    }
    @media screen and (max-width: 822px) {
        margin-top: -100px;
    }
    @media screen and (max-width: 666px) {
        transform: scale(0.5);
        margin-top: -350px;
    }
    @media screen and (max-width: 420px) {
        margin-top: -400px;
        font-size: 30px;
  }
    @media screen and (max-width: 400px) {
        transform: scale(0.4);
    }
    
    
`
export const PostalServicesTitle = styled.div`
    
    font-size: 27px;
    color: white;
    font-weight: 600;
    @media screen and (max-width: 1350px) {
        margin-top: 100px;
    }
    @media screen and (max-width: 420px) {
        font-size: 40px;
        text-align: center;
  }
`
export const PostalServicesElements = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin-top: 100px;
    box-sizing: border-box;
    @media screen and (max-width: 666px) {
        grid-template-columns: 1fr 1fr ;
    }
`
export const PostalServicesItems1 = styled.div`
    
    
`
export const PostalServicesItems2 = styled.div`
    
`
export const Images = styled.img`
    margin: 30px;
    width: 210px;
    height: 50px;
`
export const ImageEmu = styled.img`
    width: 60px;
    height: 80px;
    margin-left: 40px;
`