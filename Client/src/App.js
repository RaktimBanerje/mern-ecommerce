import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import auth from './Services/api/auth.api'
import category from './Services/api/category.api' 

import Loader from './Components/Inc/Loader'
import Dashboard from './Components/Pages/Dashboard'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import NotFound from './Components/Pages/NotFound'

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
  const [categories, setCategories] = useState(null)

    useEffect(()=>{
        auth.authenticate()
        .then(res => res.status === 200 ? setLoggedIn(true): setLoggedIn(false))
        .catch(err => setLoggedIn(false))        
    },[])

    useEffect(()=>{
      category.getAll()
      .then(res => res.status === 200 && setCategories(res.data))
      .catch(err => {})        
  },[])

  return (
    <BrowserRouter>
      <UserContext.Provider value = {{ loggedIn: loggedIn, setLoggedIn: setLoggedIn, categories: categories}}>
        <Switch>
          <PrivateRoute exact loggedIn={loggedIn} path="/" component={ Dashboard } />
          <Route exact path='/register' render={(props)=>
            loggedIn === true ? <Redirect to="/" /> : <Register {...props} /> } 
          />
          <Route exact path='/login' render={(props)=> 
            loggedIn === true ? <Redirect to="/" /> : <Login {...props} /> } 
          />
          <Route render={ NotFound } />
        </Switch>
      </UserContext.Provider>   
    </BrowserRouter>  
  )
}

export default App