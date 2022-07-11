import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../component/Main'
import Topbanner from '../component/Topbanner'
import Stats from '../component/Stats'
import Projects from '../component/Projects'
import { Amenties } from '../component/Amenties'
import Gallery from '../component/Gallery'
import Footer from '../component/Footer'
import About from '../component/About'
import Event from '../component/Event'


export default function Home() {
  return (
   <>
     <Main />
     <Topbanner/>
     <Stats/>
     <Event />
     <About/>
     <Projects/>
     <Amenties />
     <Gallery />
     <Footer/>
 
   </>
  )
}
