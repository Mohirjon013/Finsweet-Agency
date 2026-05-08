import React from 'react'
import { ContactHero, Footer, Header, TopOfFooter } from '../components'

function ContactUs() {
  return (
    <>
      <Header/>
        <main>
          <ContactHero/>
          <TopOfFooter/>
        </main>
      <Footer/>
    </>
  )
}

export default ContactUs
