import { Route, Routes } from 'react-router-dom'
import { Home, Service,Company, Career, CareerInner, Blog, BlogInner } from './pages'
import { InnerDetail, InnerReq, InnerRes } from './components'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Company/>}/>
        <Route path='career' element={<Career/>}/>
        <Route path='career/job/:id' element={<CareerInner/>} >
          <Route index element={<InnerDetail/>} />
          <Route path='requirmeents' element={<InnerReq/>} />
          <Route path='responsibilities' element={<InnerRes/>} />
        </Route>
        <Route path='blog' element={<Blog/>}/>
        <Route path='blog/posts' element={<BlogInner/>}/>
         
      </Routes>
    </>
  )
}

export default App
