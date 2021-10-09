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
import ListProduct from './Components/Pages/ListProduct'
import EditProduct from './Components/Pages/EditProduct'

export const UserContext = React.createContext()

function PrivateRoute ({component, loggedIn, ...rest}) {
  const Component = component
  return (
    <Route {...rest} render={(props)=> 
      loggedIn ? <Component {...props}/> : <Redirect to="/login" /> } />
  )
} 

const App = ()=>{

  const [state, setState] = useState({
    loggedIn: false,
    categories: [],
    parentCategories: [],
    parentChildCategories: [],
    products: [],
  })

  useEffect(()=>{
      authApi.authenticate()
        .then(res => {
          if(res.status === 200){
            setState({
              ...state,
              loggedIn: true
            })
          }
        })
        .catch(() => {
          setState({
            ...state,
            loggedIn: false
          })
        }) 
  },[])

  return (
    <BrowserRouter>
      <UserContext.Provider value = {{ state, setState }} >
        <Switch>
          <PrivateRoute exact loggedIn={state.loggedIn} path="/" component={ Dashboard } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/add-category" component={ AddCategory } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/list-category" component={ ListCategory } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/add-product" component={ AddProduct } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/list-product" component={ ListProduct } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/edit-product" component={ EditProduct } />

          <Route exact path='/register' render={(props)=>
            state.loggedIn ? <Redirect to="/" /> : <Register {...props} /> } 
          />
          <Route exact path='/login' render={(props)=> 
            state.loggedIn ? <Redirect to="/" /> : <Login {...props} /> } 
          />
          <Route exact path='/forgot-password' render={(props)=> 
            state.loggedIn ? <Redirect to="/" /> : <ForgotPassword {...props} /> } 
          />
          <Route render={ NotFound } />
        </Switch>
      </UserContext.Provider>   
    </BrowserRouter>  
  )
}

export default App