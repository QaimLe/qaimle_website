import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import authConfig from './authConfig';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider {...authConfig}>
    <App />
    </Auth0Provider>
  </StrictMode>,
)
