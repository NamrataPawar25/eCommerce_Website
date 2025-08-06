import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Registration } from "./pages/Registration"
import { Login } from './pages/Login'
import products from "./data"
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'


function App() {
  const [count, setCount] = useState(0)
  const [isRegister, setIsRegister]= useState(false)

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/register' element={<Registration setIsRegister={setIsRegister}/>}></Route>
      <Route path='/dashboard' element={<Dashboard products={products}/>}></Route>
      <Route path='/dashboard/:ID/*' element={<ProductInfo/>}></Route>
    </Routes>
    </BrowserRouter>





    {/* {isRegister ? (<Login />) : (<Registration setIsRegister={setIsRegister}/>)}

    <Dashboard products={products}/> */}
    </>
  )
}

export default App
