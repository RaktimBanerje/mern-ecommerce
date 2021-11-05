import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import authApi from './Services/api/auth.api' 
import Loader from './Components/Inc/Loader'

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
import ListOrder from './Components/Pages/ListOrder'

export const UserContext = React.createContext()

function PrivateRoute ({component: Component, loggedIn, ...rest}) {
  if(loggedIn === 'loading'){
    return (
      <Loader />
    )
  }

  else if(loggedIn === true){
    return <Route {...rest} render={props => <Component {...props} />} />
  }

  else {
    return <Redirect to="/login" />
  }
} 

const App = ()=>{

  const [state, setState] = useState({
    loggedIn: "loading",
    redirectAfterLoggedIn: null,
    categories: [],
    parentCategories: [],
    parentChildCategories: [],
    products: [],
    orders: []
  })

  useEffect(()=>{
      authApi.authenticate()
        .then(res => res.status === 200 && setState({...state, loggedIn: true}))
        .catch(err => setState({...state, loggedIn: false}))
  },[])

  useEffect(()=> {console.log(state)})
  
  return (
      <UserContext.Provider value = {{ state, setState }} >
        <Switch>

          <PrivateRoute exact loggedIn={state.loggedIn} path="/" component={ Dashboard } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/add-category" component={ AddCategory } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/list-category" component={ ListCategory } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/add-product" component={ AddProduct } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/list-product" component={ ListProduct } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/edit-product" component={ EditProduct } />
          <PrivateRoute exact loggedIn={state.loggedIn} path="/list-order" component={ ListOrder } />

          <Route exact path='/register' render={(props)=>
            state.loggedIn === true ? <Redirect to="/" /> : <Register {...props} /> } 
          />
          <Route exact path='/login' render={(props)=> 
            state.loggedIn === true ? <Redirect to="/" /> : <Login {...props} /> } 
          />
          <Route exact path='/forgot-password' render={(props)=> 
            state.loggedIn === true ? <Redirect to="/" /> : <ForgotPassword {...props} /> } 
          />
          <Route component={ NotFound } />
        </Switch>
      </UserContext.Provider>   
  )
}

export default App