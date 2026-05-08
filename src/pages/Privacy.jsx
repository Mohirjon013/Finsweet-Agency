import React from 'react'
import { Footer, Header, PrivacyInfo, PrivacyTitle, TopOfFooter } from '../components'


function Privacy() {
  return (
    <>
      <Header/>
      <main>
        <PrivacyTitle/>
        <PrivacyInfo/>
        <TopOfFooter/>
      </main>
      <Footer/>
    </>
  )
}

export default Privacy
