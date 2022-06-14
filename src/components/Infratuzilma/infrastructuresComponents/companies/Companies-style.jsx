import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 650px;
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    @media screen and (max-width: 820px) {
        height: 850px;
    }
    @media screen and (max-width: 380px) {
        
    }
`
export const Companies2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: -150px 150px;
    @media screen and (max-width: 1350px) {
        flex-direction: column;
        margin-top: -100px;
    }
    @media screen and (max-width: 680px) {
        transform: scale(0.7);
        margin-top: -200px;
    }
    @media screen and (max-width: 520px) {
        height: 500px;
    }
    @media screen and (max-width: 420px) {
    margin-top: -350px;
    font-size: 30px;
  }
    @media screen and (max-width: 380px) {
        transform: scale(0.5);
        height: 680px;
    }
`
export const CompaniesTitle = styled.div`
    font-size: 27px;
    color: white;
    font-weight: 600;
    text-align: right;
    @media screen and (max-width: 1350px) {
        margin-top: 20px;
    }
    @media screen and (max-width: 1120px) {
        width: 500px;
        text-align: center;
    }
    @media screen and (max-width: 420px) {
        font-size: 30px;
  }
  @media screen and (max-width: 380px){
    margin-top: -150px;
  }
`
export const CompaniesElements = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const CompaniesImg = styled.img`
    margin: 20px;
    width: 200px;
    height: 50px;
`
export const Providers = styled.div`
    margin-top: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 1350px) {
        flex-direction: column;
        margin-top: 250px;
        text-align: center;
    }
    @media screen and (max-width: 680px) {
        transform: scale(0.7);
        margin-top: 150px;
    }
    @media screen and (max-width: 420px) {
        transform: scale(0.6);
        
        font-size: 30px;
  }
  @media screen and (max-width: 380px) {
    margin-top: -200px;
        
  }
`
export const ProvidersTitle = styled.div`
    font-size: 27px;
    color: white;
    font-weight: 600;
    margin-left: 50px;
    text-align: right;
    width: 300px;
    @media screen and (max-width: 1350px) {
        text-align: center;
    }
    @media screen and (max-width: 420px) {
        font-size: 40px;
        
  }
`
export const ProvidersElements = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
    
`
export const ProvidersImages = styled.img`
    margin: 20px;
    display: flex;
    @media (max-width: 600px){
        flex-direction: column;
    }
`