import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importa el Router
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* Envuelve tu App con el Router */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)