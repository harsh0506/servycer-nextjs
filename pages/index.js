import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Aboutus from './Aboutus'
import Circles from './Circles'
import ContactUs from './contactUs'
import Footer from './Footer'
import HomePage from './HomePage'
import MeetOurTeam from './MeetOurTeam'
import Services from './Services'
import Testimonials from './Testimonials'
import Try from './Try'


export default function Home() {
  return (
    < >
      <Head>
        <title>sERVYCER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      {/*
<HomePage />
 <Services />
      <Aboutus />
      <MeetOurTeam />
     <Testimonials />
<ContactUs />
 <Footer />
*/}

      <Try />
      
    </>
  )
}
