import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' 
import authApi from '../src/services/api/auth.api'

import Loader from './components/inc/Loader'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import PageMissing from './components/pages/PageMissing'
import ProductView from './components/pages/ProductView'
import Register from './components/pages/Register'
import PaymentSuccess from './components/pages/PaymentSuccess'

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

const App = () => {  
  
  const [ state, setState ] = useState({
    user: {},
    loggedIn: 'loading',
    cart: [],
    products: []
  })

  useEffect(() => {
    authApi.authenticate()
      .then(res => res.status === 200 && setState(state => ({...state, loggedIn: true})))
      .catch(err => setState(state => ({...state, loggedIn: false})))
  }, [])

  useEffect(() => {
    console.log(state)
  })

  return (
      <UserContext.Provider value={{state, setState}}>
          <Switch>
          <Route exact path="/" component={Home} />   
          <Route exact path="/product-view" component={ProductView} />

          <Route exact path="/cart" render={props => {
            if(state.loggedIn === 'loading') return <Loader />
            else if(state.loggedIn === true) return <Cart {...props} />
            else return <Redirect to="/login" />                
          }} />

          <Route exact path="/payment" render={props => {
            if(state.loggedIn === 'loading') return <Loader />
            else if(state.loggedIn === true) return <PaymentSuccess {...props} />
            else return <Redirect to="/login" />                
          }} />
                                          
          <Route exact path="/login" render={(props)=>
            state.loggedIn === true ? <Redirect to="/" /> : <Login {...props} /> }
          />
          <Route exact path="/register" render={(props)=>
            state.loggedIn === true ? <Redirect to="/" /> : <Register {...props} /> }
          />

          <Route component={PageMissing} />
          </Switch>
      </UserContext.Provider>
  )
}

export default App
