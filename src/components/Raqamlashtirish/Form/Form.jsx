import React, { useState } from 'react'
import { Button, CenterText, FormDiv, ForstDiv, Inp, InpBig, InpBigDiv, InpDiv, MainDiv, SecondDiv, SritsDiv, TextFilledLable } from './style'
import Alert from './../Alert/Alert'
import Snackbar from './Snackbar/Snackbar'
import axios from 'axios';
const APIForm = 'http://167.99.214.82/post-contact/'



const Form = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  

  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Coment, setComent] = useState('');



  
  let formData = new FormData()
  formData.append('fullname',Name)
  formData.append('phone',Phone)
  formData.append('email',Email)
  formData.append('text',Coment)


  const SendBtn = ()=>{
        if (Name === '' && Phone === '' && Email === '') {
            setOpen1(true)
            console.log('ishlayapti inp');
        }else{
          axios.post(APIForm,formData)
         .then((res)=>{
          console.log(res);
          setOpen(true)})
          console.log('sdsfhsdks');

        }
  }
  


  return (
    <MainDiv>
      <CenterText>BIZ BILN BOGLANING</CenterText>
      <FormDiv>

        <ForstDiv>
          <InpDiv> <TextFilledLable>To'liq ism sharif</TextFilledLable> <Inp type='text' onChange={(e)=>setName(e.target.value)} /> </InpDiv>
          <InpDiv>  <TextFilledLable>Telefon</TextFilledLable> <Inp type='email' onChange={(e)=>setPhone(e.target.value)} /> </InpDiv>
          <InpDiv> <TextFilledLable>Elektron pochta</TextFilledLable> <Inp type='text' onChange={(e)=>setEmail(e.target.value)} /> </InpDiv>
        </ForstDiv>
        
            <SecondDiv>
            <InpBigDiv>Izox</InpBigDiv>
              <InpBig type='text' onChange={(e)=>setComent(e.target.value)} />
            </SecondDiv>

        <SritsDiv>
          <Button onClick={SendBtn} >Ariza yuborish</Button>
        </SritsDiv>

      </FormDiv>
        <Alert open={open} setOpen={setOpen}  />   
        <Snackbar open1={open1} setOpen1={setOpen1} />
    </MainDiv>
  )
}

export default Form


// axios.post(APIForm,formData)
//     .then((res)=>{
//     console.log(res);
//     setOpen(true)