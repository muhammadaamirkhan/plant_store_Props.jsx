import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <Footer />
  </StrictMode>
)