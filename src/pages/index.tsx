 
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




export default function Home() {


  return (
    <>
      
      <Homepart0></Homepart0>
      <section style={{paddingTop:'70px',backgroundColor:'var(--Bright_Gray)'}}  id="section1">
      <Homepart1></Homepart1>
      </section>
      <section style={{paddingTop:'70px',
      paddingBottom:'30px' ,
       backgroundImage: "url('/expertiseimage.png')",
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       }} 
        id="section2">
      <Homepart3></Homepart3>
      </section>
      <section style={{paddingTop:'30px',backgroundColor:'var(--Bright_Gray)'}}  id="section3">
      
      <Homepart6></Homepart6>

      
      </section>
      <section   id="section4">
      
      <Homepart5></Homepart5>
      <Homepage7></Homepage7>
      </section>

      
      
      

    </>
  )
}
