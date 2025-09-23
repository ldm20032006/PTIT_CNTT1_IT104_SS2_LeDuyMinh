import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/stores/index.ts'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
       
    </Provider>
   
  </StrictMode>,
<<<<<<< HEAD
) 
=======
)
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
