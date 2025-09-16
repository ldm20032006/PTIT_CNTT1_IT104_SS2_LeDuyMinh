import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './components/bai1,2/Home'
// import About from './components/bai1,2/About'
// import Contact from './components/bai1,2/Contact'
import Login from './components/bai3/Login'
import Register from './components/bai4/Register'
import NotFound from './components/bai5/NotFound'
import Header from './components/bai6/Header'
import Product from './components/bai6/Product'
import Detail from './components/bai6/Detail'
import HomePage from './components/bai7/HomePage'
import CustomLink from './components/bai7/CustomLink'
import ListUser from './components/bai8/ListUser'
import UserDetail from './components/bai8/UserDetail'
function App() {

  return(
  <>
    {/*Định nghĩa danh sách các hướng dẫn của ứng dụng */}
    <Routes>
      {/*Định nghĩa từng route tương ứng với từng Component*/}
      {/* <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/header" element={<Header />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/custom-link" element={<CustomLink />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<ListUser />} />
        <Route path="/users/:id" element={<UserDetail />} />
    </Routes>   
  </>
)
}

export default App
