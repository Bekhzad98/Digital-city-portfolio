import React, { useEffect, useState } from 'react';
import { Companiestext, CompaniesTitle, Container, ContainerOne, ImageEmu, Images, PostalServices, PostalServicesElements, PostalServicesItems1, PostalServicesItems2, PostalServicesTitle } from './ITcompanies-style';

import axios from 'axios';

  const PostalApi = 'http://159.65.207.213/api/postalservice/'

const ITcompanies = () => {

  const [Postal1, setPostalservices1] = useState({});
  const [Postal2, setPostalservices2] = useState({});
  const [Postal3, setPostalservices3] = useState({});
  const [Postal4, setPostalservices4] = useState({});
  const [Postal5, setPostalservices5] = useState({});






  useEffect(() => {
    axios.get(PostalApi)
    .then(res=>{
      setPostalservices1(res.data[0]);
      setPostalservices2(res.data[1]);
      setPostalservices3(res.data[2]);
      setPostalservices4(res.data[3]);
      setPostalservices5(res.data[4]);
    });
  }, [])
  

  return (
    <>
      <Container>
        <ContainerOne>
        <CompaniesTitle>
        IT Kompaniyalar
        </CompaniesTitle>
        <Companiestext>
        5.Xozrida Andijonda ko'plab IT kompaniyalar turli yo'nalishlarda o'z ish faoliyatini olib bormoqdalar: pochta, aloqa va internet xizmatlari bilan xalq turmush darajasining yaxshilanishiga, ijtimoiy extiyojlarning qondirilishiga, iqtisodning o'sishi hamda fan-texnika taraqqiyotining jadallashishiga xizmat qilishmoqda.
        </Companiestext>
        </ContainerOne>
        <PostalServices>
          <PostalServicesTitle>
          Andijondagi Pochta Xizmatlari
          </PostalServicesTitle>
          <PostalServicesElements>
              <PostalServicesItems1>
              <ImageEmu src={`http://159.65.207.213/${Postal3.logo}`} alt="" />
              <Images src={`http://159.65.207.213/${Postal2.logo}`} alt='' />
              <Images src={`http://159.65.207.213/${Postal1.logo}`} alt=''/>
              </PostalServicesItems1>
              <PostalServicesItems2>
              <Images src={`http://159.65.207.213/${Postal4.logo}`} alt="" />
              <Images src={`http://159.65.207.213/${Postal5.logo}`} alt="" />
              </PostalServicesItems2>
              
          </PostalServicesElements>
        </PostalServices>
      </Container>
    </>
  )
}

export default ITcompanies;