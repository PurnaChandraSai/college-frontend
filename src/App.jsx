import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Admission from './pages/Admission'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>  
   <Routes>
   

    <Route path='/' element={ <Home/>}/> 
     <Route path='/admission' element={ <Admission/>} />

   
   </Routes>
   </BrowserRouter>

  
   </>
  )
}

export default App
