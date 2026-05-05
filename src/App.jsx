
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, Service,Company, Career } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='company' element={<Company/>}/>
          <Route path='career' element={<Career/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
