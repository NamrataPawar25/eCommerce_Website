import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Registration } from "./pages/Registration"
import { Login } from './pages/Login'
import products from "./data"
import Dashboard from './pages/Dashboard'


function App() {
  const [count, setCount] = useState(0)
  const [isRegister, setIsRegister]= useState(false)

  return (
    <>
    {isRegister ? (<Login />) : (<Registration setIsRegister={setIsRegister}/>)}
    
    {/* <Registration/>
    <Login /> */}

    <Dashboard products={products}/>
    </>
  )
}

export default App
