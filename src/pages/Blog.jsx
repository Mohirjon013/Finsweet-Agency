import React from 'react'
import { BlogBreaking, BlogPost, BlogRead, Footer, Header, NewsLetter, TopOfFooter } from '../components'

function Blog() {
    return (
        <>
            <Header/>
            <main>
                <BlogBreaking/>
                <BlogRead/>
                <BlogPost/>
                <NewsLetter/>
                <TopOfFooter/>
            </main>
            <Footer/>
        </>
    )
}

export default Blog
