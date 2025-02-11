import { useState } from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './components/login/login'
import Signup from './components/signup/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
