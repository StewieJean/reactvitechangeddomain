import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Match any route */}
        <Route path="*" element={<Page />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
