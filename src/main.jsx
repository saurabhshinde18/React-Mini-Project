import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Recipiecontext from './context/Recipiecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Recipiecontext>
          <App />
    </Recipiecontext>
       <ToastContainer position='top-center'/>
    </BrowserRouter>
  </StrictMode>,
)
