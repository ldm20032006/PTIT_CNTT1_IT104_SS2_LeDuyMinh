import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import ListCourse from './btvn/bai1'
// import Calculation from './btvn/bai2'
// import UserInfo from './btvn/bai3'
// import ColorBox from './btvn/bai4'
// import FormatName from './btvn/bai5'
// import AdminIndex from './btvn/bai6'
// import UserLayout from './btvn/bai7'
// import UI from './btvn/bai8'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListCourse/>
    {/* <Calculation/>
    <UserInfo/>
    <ColorBox/>
    <FormatName/>
    <AdminIndex/>
    <UserLayout/>
    <UI/> */}
  </StrictMode>
)
//UserLayout