import React from 'react';
import './App.css';
import SideBar from './components/sidebar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './components/Auth'



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/Login" component={LogIn} />
          <Route exact path="/SignUp" component={SignUp} />
          </Switch>
      <SideBar />
      <LogIn />
      <SignUp />
      <LoginForm />
      </Router>
    </AuthProvider>
    
  );
}

export default App;
//aas