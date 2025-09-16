import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import Increase from './assets/Components/Increase.tsx'
// import LoginForm from './assets/Components/LoginForm.tsx'
// import InputChange from './assets/Components/InputChange.tsx'
// import ColorPicker from './assets/Components/ColorPicker.tsx'
// import InputRadio from './assets/Components/InputRadio.tsx'
// import UserList from './assets/Components/UserList.tsx'
import TodoApp from './assets/Components/bai7,8/TodoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Increase/>
    <LoginForm/>
    <InputChange/>
    <ColorPicker/>
    <InputRadio/>
    <UserList/> */}
    <TodoApp/>
  </StrictMode>,
)
