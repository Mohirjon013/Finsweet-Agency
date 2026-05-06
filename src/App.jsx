import { Route, Routes } from 'react-router-dom'
import { Home, Service,Company, Career } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='company' element={<Company/>}/>
        <Route path='career' element={<Career/>}/>
      </Routes>
    </>
  )
}

export default App
