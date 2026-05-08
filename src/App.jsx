import { Route, Routes } from 'react-router-dom'
import { Company, Career, CareerInner, Blog, BlogInner, CompanyTeam, Privacy, ContactUs } from './pages'
import { InnerDetail, InnerReq, InnerRes, ScrollToTop } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false}/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Company/>}/>
        <Route path='/team/:id' element={<CompanyTeam/>}/>
        <Route path='career' element={<Career/>}/>
        <Route path='career/job/:id' element={<CareerInner/>} >
          <Route index element={<InnerDetail/>} />
          <Route path='requirmeents' element={<InnerReq/>} />
          <Route path='responsibilities' element={<InnerRes/>} />
        </Route>
        <Route path='blog' element={<Blog/>}/>
        <Route path='blog/posts' element={<BlogInner/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
        <Route path='privacy-policy' element={<Privacy/>}/>

          
      </Routes>
    </> 
  )
}

export default App
