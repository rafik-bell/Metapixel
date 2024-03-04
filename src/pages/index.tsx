 
import Image from 'next/image'
import Homepart0 from '../component/Home/Homepart0'
import Homepart1 from '../component/Home/Homepart1'
import Homepart2 from '../component/Home/Homepart2'
import Homepart3 from '../component/Home/Homepart3'
import Homepart5 from '../component/Home/Homepart5'
import Homepart6 from '../component/Home/Homepart6'
import dynamic from 'next/dynamic'
import { Typography } from '@mui/material'
import Homepage7 from '@/component/Home/Homepage7'
import imag2 from "../assets/image/pxfuel.png"
import imag1 from "../assets/image/Finalpng1.png"




export default function Home() {


  return (
    <>
      
      <Homepart0></Homepart0>
      <section style={{paddingTop:'70px', backgroundImage: `url(${imag1.src})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       paddingBottom:'55px'}}  id="section1">
      <Homepart1></Homepart1>
      </section>
      <div style={{ backgroundImage: `url(${imag2.src})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',}}>
      <section style={{paddingTop:'70px',
      paddingBottom:'30px' ,
      
       }} 
        id="section2">
      <Homepart3></Homepart3>
      </section>
      <section style={{paddingTop:'10px'}}  id="section3">
      
      <Homepart6></Homepart6>

      
      </section>
      
      <section   id="section4">
      
      <Homepart5></Homepart5>
      <Homepage7></Homepage7>
      </section>
      </div>
      
      
      

    </>
  )
}
