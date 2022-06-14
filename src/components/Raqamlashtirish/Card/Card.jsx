import React, {  useEffect, useState } from 'react'
import { APIcentrdiv, APIDiv, CardDiv, CardEndDiv, CardImg, CardStartDiv, CardText, MainDiv } from './style'

import axios from 'axios'

//import Api
const APICard = 'http://167.99.214.82/get-raqamlashtirishxizmatlari/'


const Card = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    // console.log(data);

    axios.get(APICard)
    .then(res=>{
      setData(res.data)
      // console.log(res.data);
    })
  }, [])
  


  return (
    <MainDiv>

         <APIDiv>
          <APIcentrdiv>
             {
               data?.map((item,index)=>{
                 return(
                    <CardDiv key={index}>
                      <CardStartDiv><CardText>{item.text_uz}</CardText></CardStartDiv>
                      <CardImg src={`http://167.99.214.82${item.image}`} />
                      <CardEndDiv>{item.name_uz}</CardEndDiv>
                    </CardDiv>
                 )
               })
             }

              

          </APIcentrdiv>
        </APIDiv>
    </MainDiv>
  )
}

export default Card