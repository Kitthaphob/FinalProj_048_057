import React from 'react'
import './App.css'
import SideBar from './components/sidebar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/Login" component={LogIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Routes>
        <SideBar />
        <LogIn />
        <SignUp />
      </Router>
    </AuthProvider>
  )
}

export default App
//aas
