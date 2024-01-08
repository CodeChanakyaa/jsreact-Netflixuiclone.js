import { useState } from 'react'
import './App.scss'
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Watch from './components/Watch/Watch'
import Register from './Register/Register'
import Login from './Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={< Home />} />
          <Route exact path='/register' element={< Register />} />
          <Route exact path='/login' element={< Login />} />
          <Route exact path='/watch' element={< Watch />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
