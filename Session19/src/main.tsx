import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import ShoppingCart from './assets/components/bai1/ShoppingCart.tsx'
// import ThemeApp from './assets/components/bai2/ThemeApp.tsx'
// import RenderCounter from './assets/components/bai3/RenderCounter.tsx'
// import Register from './assets/components/bai4/Register.tsx'
// import RandomQuote from './assets/components/bai5/RandomQuote.tsx'
// import KeyTracker from './assets/components/bai6/KeyTracker.tsx'
// import ScrollToSection from './assets/components/bai7/ScrollToSection.tsx'
import Login from './assets/components/bai8/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
    <ShoppingCart/>
    <ThemeApp/>
    <RenderCounter/>
    <Register/>
    <RandomQuote/>
    <KeyTracker/>
    <ScrollToSection/> */}
    <Login/>
  </StrictMode>,
)
