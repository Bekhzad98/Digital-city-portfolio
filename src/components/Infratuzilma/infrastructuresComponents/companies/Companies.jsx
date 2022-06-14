import React, { useEffect, useState } from 'react';
import { Companies2, CompaniesElements, CompaniesImg, CompaniesTitle, Container, Providers, ProvidersElements, ProvidersImages, ProvidersTitle } from './Companies-style';

//Providers
import axios from 'axios';

const Mobile ='http://159.65.207.213/api/mobileoperator/';
const ProvidersApi ='http://159.65.207.213/api/internetproviders/';

const Companies = () => {

  const [mobileOperators1, setMobileOperators1] = useState({});
  const [mobileOperators2, setMobileOperators2] = useState({});
  const [mobileOperators3, setMobileOperators3] = useState({});
  const [mobileOperators4, setMobileOperators4] = useState({});
  const [mobileOperators5, setMobileOperators5] = useState({});
  const [provider1, setProvider1] = useState({}); 
  const [provider2, setProvider2] = useState({}); 
  const [provider3, setProvider3] = useState({}); 

  useEffect(() => {
    axios.get(Mobile)
    .then(res=>{
      setMobileOperators1(res.data[0]);
      setMobileOperators2(res.data[1]);
      setMobileOperators3(res.data[2]);
      setMobileOperators4(res.data[3]);
      setMobileOperators5(res.data[4]);
    });


    axios.get(ProvidersApi)
    .then(res=>{
      setProvider1(res.data[0]);
      setProvider2(res.data[1]);
      setProvider3(res.data[2]);
    });
  }, [])
  

  return (
    <>
        <Container>
          <Companies2>
            <CompaniesElements>
                <CompaniesImg src={`http://159.65.207.213/${mobileOperators1.logo}`} alt=''/>
                <CompaniesImg src={`http://159.65.207.213/${mobileOperators2.logo}`} alt=''/>
                <CompaniesImg src={`http://159.65.207.213/${mobileOperators3.logo}`} alt=''/>
                <CompaniesImg src={`http://159.65.207.213/${mobileOperators4.logo}`} alt=''/>
                <CompaniesImg src={`http://159.65.207.213/${mobileOperators5.logo}`} alt=''/>
            </CompaniesElements>
            <CompaniesTitle>
              Andijonda Mobil Operatorlari, uyali telefon kompaniyalar
            </CompaniesTitle>
          </Companies2>
          <Providers>
            <ProvidersTitle>
              Andijonda Internet 
              Provayderlar
            </ProvidersTitle>
            <ProvidersElements>
              <ProvidersImages src={`http://159.65.207.213/${provider1.logo}`} alt=''/>
              <ProvidersImages src={`http://159.65.207.213/${provider2.logo}`} alt=''/>
              <ProvidersImages src={`http://159.65.207.213/${provider3.logo}`} alt=''/>
            </ProvidersElements>
          </Providers>

        </Container>
    </>
  )
}

export default Companies;