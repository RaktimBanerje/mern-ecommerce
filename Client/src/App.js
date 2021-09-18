import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import auth from './Services/api/auth.api'

import Loader from './Components/Inc/Loader'
import Dashboard from './Components/Pages/Dashboard'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'

export const UserContext = React.createContext()

function PrivateRoute ({component, loggedIn, ...rest}) {
  const Component = component
  return (
    <Route {...rest} render={(props)=> 
      loggedIn === true ? <Component {...props}/> : <Redirect to="/login" /> } />
  )
} 

const App = ()=>{
  const [loggedIn, setLoggedIn] = useState(null)

    useEffect(()=>{
        auth.authenticate()
        .then(res => res.status === 200 ? setLoggedIn(true): setLoggedIn(false))
        .catch(err => setLoggedIn(false))        
    },[])

  return (
    <BrowserRouter>
      <UserContext.Provider value = {{ loggedIn: loggedIn, setLoggedIn: setLoggedIn}}>
        <Switch>
          <PrivateRoute exact loggedIn={loggedIn} path="/" component={ Dashboard } />
          <Route exact path='/register' render={(props)=>
            loggedIn === true ? <Redirect to="/" /> : <Register {...props} /> } 
          />
          <Route exact path='/login' render={(props)=> 
            loggedIn === true ? <Redirect to="/" /> : <Login {...props} /> } 
          />
        </Switch>
      </UserContext.Provider>   
    </BrowserRouter>  
  )
}

export default App