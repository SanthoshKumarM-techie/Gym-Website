import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Programs from './Programs.jsx'
import Pricing from './Pricing.jsx'
import ClientFeedback from './ClientFeedback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClientFeedback/>
  </StrictMode>,
)
