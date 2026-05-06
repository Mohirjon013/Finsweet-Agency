import React from 'react'
import { CompanyHero, Header, CompanyEpertise, CompanyVision, CompanyTeam, NewsLetter, TopOfFooter, Footer } from '../components'



function Company() {
  

  return (
    <>
      <Header/>
      <main>
        <CompanyHero/>
        <CompanyEpertise/>
        <CompanyVision/>
        <CompanyTeam/>
        <NewsLetter/>
        <TopOfFooter/>
      </main>
      <Footer/>
    </>
  )
}

export default Company
