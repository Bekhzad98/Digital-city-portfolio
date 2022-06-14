import './style.css'
import Icon2 from '../images/phone.png'
import Rasm7 from '../images/rasm1.png'
import Rasm2 from '../images/rasm2.png'
import Rasm3 from '../images/rasm3.png'
import Rasm5 from '../images/rasm5.png'
import Rasm6 from '../images/rasm6.png'
import Rasm4 from '../images/2.png'

//back-end
import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Api = "http://167.99.214.82/get-itacademy/"
const Api2 = "http://167.99.214.82/get-studydirections/"

function Talim() {

  const [data, setData] = useState({})
  const [data1, setData1] = useState({})
  const [data2, setData2] = useState({})
  const [data3, setData3] = useState({})
  const [data4, setData4] = useState({})
  const [data5, setData5] = useState({})
  useEffect(() => {
      axios.get(Api)
      .then(res=>{
        setData(res.data[0])
        // console.log(res.data[0]);
      })

      //Api2
      axios.get(Api2)
      .then(res=>{
        setData5(res.data[0])
        // console.log(res.data[0]);
      })
      //data2
      axios.get(Api)
      .then(res=>{
        setData1(res.data[1])
        // console.log(res.data[1]);
      })

      //data3
      axios.get(Api)
      .then(res=>{
        setData2(res.data[2])
        // console.log(res.data[2]);
      })
      //data3
      axios.get(Api)
      .then(res=>{
        setData3(res.data[3])
        // console.log(res.data[3]);
      })
      //data4
      axios.get(Api)
      .then(res=>{
        setData4(res.data[4])
        // console.log(res.data[4]);
      })
  }, []);

  
    return (
      <div className="Digital">
          <h1 className="talim-it">IT TA'LIM</h1>
        <div className="talim-main">
            <div className="talim-main-chap">
                <div className="talim-icon">
                    {/* <img src={Bir} alt="" /> */}
                </div>
            </div>
            <div className="talim-main-orta">
                    <img src={Rasm2} alt="" className='talim-main-img' />
            </div>
            <div className="talim-ong">
                    <img src={Icon2} alt="" /> <h3>1227</h3>
            </div>
        </div>
        <h2 className="talim-it">{data5.tittle_en}</h2>

        <div className="talim-main2">
          <div className="talim-main2-top">
                 <div className="talim-main2-images">
                       <img src={Rasm3} alt="" />
                 </div>
                 <div className="talim-main2-images">
                        <img src={Rasm7} alt="" />
                 </div>
          </div>
          <div className="talim-main2-buttom">
                <div className="talim-main2-images">
                <img src={Rasm5} alt="" />
                </div>
              <div className="talim-main2-images">
              <img src={Rasm4} alt="" />
                 </div>
                  <div className="talim-main2-images">
                  <img src={Rasm6} alt="" />
                </div>
          </div>
        </div>
        <div className="talim-text3">
          <h1>iT AKADEMIYA</h1>
          <p>Bu yerda IT taʼlimning barcha <br /> yoʻnalishlari keltirilgan</p>
        </div>
        
              <div className="itakademiya">
              <div className="itakademiya-chap">
              <div className="itakademiya-blocks itakademiya-blocks1">
                   <div className="block-text">
                       <h1>{data.name_ru}</h1>
                       <p>{data.texnologies}</p>
                       <p>Бошланиш {data.start}</p>
                       <p>Давомийлиги {data.duration}</p>
                       <button>Йозилиш</button>
                   </div>
                   <div className="block-image">
                    <img src={`http://167.99.214.82${data.image}`}  className="image" alt="" />
                   </div>
                </div>
                <div className="itakademiya-blocks itakademiya-blocks2">
                   <div className="block-text">
                       <h1>{data1.name_ru}</h1>
                       <p>{data1.texnologies}</p>
                       <p>Бошланиш {data1.start}</p>
                        <p>Давомийлиги {data1.duration}</p>
                       <button>Йозилиш</button>
                   </div>
                   <div className="block-image">
                     <img src={`http://167.99.214.82${data1.image}`} alt="" />
                   </div>
                </div>
                <div className="itakademiya-blocks itakademiya-blocks3">
                   <div className="block-text">
                       <h1>{data2.name_ru}</h1>
                       <p>{data2.texnologies}</p>
                       <p>Бошланиш {data2.start}</p>
                       <p>Давомийлиги {data2.duration}</p>
                       <button>Йозилиш</button>
                   </div>
                   <div className="block-image">
                     <img src={`http://167.99.214.82${data2.image}`} alt="" />
                   </div>
                </div>
                
                
              </div>
              <div className="itakademiya-ong">
              <div className="itakademiya-blocks itakademiya-blocks4">
                   <div className="block-text">
                       <h1>{data3.name_ru}</h1>
                       <p>{data3.texnologies}</p>
                       <p>Бошланиш {data3.start}</p>
                       <p>Давомийлиги {data3.duration}</p>
                       <button>Йозилиш</button>
                   </div>
                   <div className="block-image">
                     <img src={`http://167.99.214.82${data3.image}`} alt="" />
                   </div>
                </div>
                <div className="itakademiya-blocks itakademiya-blocks5">
                   <div className="block-text">
                       <h1>{data4.name_en}</h1>
                      <p>{data4.texnologies}</p>
                      <p>Бошланиш {data4.start}</p>
                      <p>Давомийлиги {data4.duration}</p>
                       <button>Йозилиш</button>
                   </div>
                   <div className="block-image">
                     <img src={`http://167.99.214.82${data4.image}`} alt="" />
                   </div>
                </div>
              </div>
            </div>

        
        </div>
    );
  }
  
  export default Talim;