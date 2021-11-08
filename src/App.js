import React from 'react';
import './App.css';
import SideBar from './components/sidebar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';



function App() {
  return (
    <div>
      <SideBar />
      <LogIn />
      <SignUp />
      </div>
  );
}

export default App;
