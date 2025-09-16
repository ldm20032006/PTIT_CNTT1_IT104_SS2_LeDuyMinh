import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import UseState from './assets/components/UseState.tsx'
// import UserProfile from './assets/components/UserProfile.tsx'
// import Welcome from './assets/components/Welcome.tsx'
// import PageTitle from './assets/components/PageTitle.tsx'
// import Timer from './assets/components/Timer.tsx'
// import Modal from './assets/components/Modal.tsx'
// import Counter from './assets/components/Counter.tsx'
import UserForm from './assets/components/bai8/UserForm.tsx'
import TodoList from './assets/components/TodoList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
    <UseState/>
    <UserProfile/>
    <Welcome/>
    <PageTitle/>
    <Timer/> 
    <Modal/>
    <Counter/> */}
    <UserForm/>
    <TodoList/>
  </StrictMode>,
)
//UserProfile
//UserForm