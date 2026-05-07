// ScrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    const isNestedRoute = pathname.includes('/career/job/')
    if (!isNestedRoute) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

export default ScrollToTop