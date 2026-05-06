import React from 'react'
import { CareerHero, CareerList, CareerWork, Footer, Header, NewsLetter, TopOfFooter } from '../components'

function Career() {
  return (
    <>
      <Header/>
      <main>
        <CareerHero/>
        <CareerList/>
        <CareerWork/>
        <NewsLetter/>
        <TopOfFooter/> 
      </main>
      <Footer/>
    </>
  )
}

export default Career
