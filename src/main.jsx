import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SocialNetworkApp } from './SocialNetworkApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialNetworkApp />
  </StrictMode>,
)
