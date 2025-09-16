import { useState } from 'react'
import './App.css'
import Bai1 from './assets/components/Bai1'
import Bai2 from './assets/components/Bai2'
import Bai3 from './assets/components/Bai3'
import Bai4 from './assets/components/Bai4'
import Bai5 from './assets/components/Bai5'
import Bai6 from './assets/components/Bai6'
import Bai7 from './assets/components/Bai7'
import Bai8 from './assets/components/Bai8'
function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
     <Bai1/>
     <Bai2/>
     <Bai3/>
     <Bai4/>
     <Bai5/>
     <Bai6/>  
     <Bai7/>
     <Bai8/>
    </>
  )
}

export default App
