import React from 'react'
import { BlogInnerCode, BlogInnerInfo, Footer, Header, NewsLetter, TopOfFooter } from '../components'

function BlogInner() {
  return (
    <>
      <Header/>
      <main>
        <BlogInnerCode/>
        <BlogInnerInfo/>
        <NewsLetter/>
        <TopOfFooter/>
      </main>
      <Footer/>
    </>
  )
}

export default BlogInner
