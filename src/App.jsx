import { Route, Routes } from 'react-router-dom'
import { Home, Service,Company, Career, CareerInner } from './pages'
import { InnerDetail, InnerReq, InnerRes } from './components'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='company' element={<Company/>}/>
        <Route path='career' element={<Career/>}/>
        <Route path='career/job/:id' element={<CareerInner/>} >
          <Route index element={<InnerDetail/>} />
          <Route path='requirmeents' element={<InnerReq/>} />
          <Route path='responsibilities' element={<InnerRes/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
