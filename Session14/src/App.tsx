import { useState } from 'react'
import './App.css'
import ParentComponents from './assets/components/ParentComponents'
// import Time from './assets/components/Time'
import Exercise01 from './assets/components/bai1'
import Notification from './assets/components/bai2'
import Exercise03 from './assets/components/bai3'
import Exercise04 from './assets/components/bai4'
import Exercise05 from './assets/components/bai5'
import Exercise06 from './assets/components/bai6'
import Exercise07 from './assets/components/bai7'
import Exercise08 from './assets/components/bai8'

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
      <ParentComponents/>
      <Exercise01/>
      <Notification/>
      <Exercise03/>
      <Exercise04/>
      <Exercise05/>
      <Exercise06/>
      <Exercise07/>
      <Exercise08/>
    </>
  )
}

export default App
