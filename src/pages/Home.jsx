import React from 'react'
import { CompanyHero, Header } from '../components'
import CompanyEpertise from '../components/CompanyEpertise'



function Home() {
  

  return (
    <div>
      <Header/>

      <main className=''>
        <CompanyHero/>
        <CompanyEpertise/>
      </main>
    </div>
  )
}

export default Home
