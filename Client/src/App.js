import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import authApi from './Services/api/auth.api' 

import Dashboard from './Components/Pages/Dashboard'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import NotFound from './Components/Pages/NotFound'
import ForgotPassword from './Components/Pages/ForgotPassword'
import AddCategory from './Components/Pages/AddCategory'
import ListCategory from './Components/Pages/ListCategory'
import AddProduct from './Components/Pages/AddProduct'

export const UserContext = React.createContext()

function PrivateRoute ({component, loggedIn, ...rest}) {
  const Component = component
  return (
    <Route {...rest} render={(props)=> 
      loggedIn ? <Component {...props}/> : <Redirect to="/login" /> } />
  )
} 

const App = ()=>{
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
      authApi.authenticate()
        .then(res => res.status === 200 && setLoggedIn(true))
        .catch(() => setLoggedIn(false)) 
  },[])

  return (
    <BrowserRouter>
      <UserContext.Provider value = {{ loggedIn, setLoggedIn }} >
        <Switch>
          <PrivateRoute exact loggedIn={loggedIn} path="/" component={ Dashboard } />
          <PrivateRoute exact loggedIn={loggedIn} path="/add-category" component={ AddCategory } />
          <PrivateRoute exact loggedIn={loggedIn} path="/list-category" component={ ListCategory } />
          <PrivateRoute exact loggedIn={loggedIn} path="/add-product" component={ AddProduct } />

          <Route exact path='/register' render={(props)=>
            loggedIn ? <Redirect to="/" /> : <Register {...props} /> } 
          />
          <Route exact path='/login' render={(props)=> 
            loggedIn ? <Redirect to="/" /> : <Login {...props} /> } 
          />
          <Route exact path='/forgot-password' render={(props)=> 
            loggedIn ? <Redirect to="/" /> : <ForgotPassword {...props} /> } 
          />
          <Route render={ NotFound } />
        </Switch>
      </UserContext.Provider>   
    </BrowserRouter>  
  )
}

export default App