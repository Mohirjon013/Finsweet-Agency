import React from 'react'
import { BlogInnerCode, Footer, Header, NewsLetter, TopOfFooter } from '../components'

function BlogInner() {
  return (
    <>
      <Header/>
      <main>
        <BlogInnerCode/>
        <NewsLetter/>
        <TopOfFooter/>
      </main>
      <Footer/>
    </>
  )
}

export default BlogInner
