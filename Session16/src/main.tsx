import { StrictMode } from 'react'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
// import SubjectList from './assets/components/bai1/SubjectList'
// import LoginStatus from './assets/components/bai2/LoginStatus'
// import ButtonProps from './assets/components/bai3/ButtonProps'
// import ClickCounter from './assets/components/bai4/ClickCounter.tsx'
// import UserForm from './assets/components/bai5/UserForm.tsx'
// import ThemeSwitcher from './assets/components/bai6/ThemeSwitcher.tsx'
// import Store from './assets/components/bai7,8/Store.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <SubjectList/>
    <LoginStatus/> */}
    {/* <ButtonProps/> */}
    {/* <ClickCounter/> */}
    {/* <UserForm/> */}
    {/* <ThemeSwitcher/> */}
    {/* <Store/> */}
  </StrictMode>,
)
//ThemeSwitcher