import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Admission from './pages/Admission'
import Home from './pages/Home'
import CoursesSection from './pages/courses'

import Achievements from './pages/News'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>  
   <Routes>
   

    <Route path='/' element={ <Home/>}/> 
     <Route path='/admissions' element={ <Admission/>} />
    <Route path='/courses' element={<CoursesSection/>}/>
   <Route path='/News' element={<Achievements/>}/>
   
   </Routes>
   </BrowserRouter>

  
   </>
  )
}

export default App
