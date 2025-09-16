import './App.css'
import Todolist from './assets/components/Todolist'
import Exercises01 from "./assets/components/Bai1"
import Exercise02 from './assets/components/bai2'
import Exercise03 from './assets/components/Bai3/bai3'
import Parent_Comp from './assets/components/bai4/Parent_Comp'
import Parent from './assets/components/bai5/Parent'
import ListPost from './assets/components/Bai6/ListPost'
import AppStyle from './assets/components/bai7/AppStyle'
function App() {

  return (
    <>
      <Todolist/>
      <Exercises01/>
      <Exercise02/>
      <Exercise03/>
      <Parent_Comp/>
      <ListPost/>
      <Parent/>
      <AppStyle/>
    </>
  )
}

export default App
