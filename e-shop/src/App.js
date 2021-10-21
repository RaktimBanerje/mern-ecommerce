import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom' 
import authApi from '../src/services/api/auth.api'

import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import PageMissing from './components/pages/PageMissing'
import ProductView from './components/pages/ProductView'
import Register from './components/pages/Register'
import PaymentSuccess from './components/pages/PaymentSuccess'

export const UserContext = React.createContext()

function PrivateRoute ({component: Component, loggedIn, ...rest}) {
  return <Route {...rest} render={props => (
              loggedIn ?  <Component {...props} />  : <Redirect to="/login" />
          )} />
} 

const App = () => {  
  
  const [ state, setState ] = useState({
    loggedIn: false,
    cart: [],
    products: []
  })

  useEffect(() => {
    authApi.authenticate()
      .then(res => res.status === 200 && setState({...state, loggedIn: true}))
      .catch(err => setState({...state, loggedIn: false}))
  }, [])

  useEffect(() => {
    console.log(state)
  })

  return (
    <BrowserRouter>
      <UserContext.Provider value={{state, setState}}>
        <Switch>
          
          {/* Private Routes */}
          <Route exact loggedIn={state.loggedIn} path="/cart" component={Cart} />
          <Route exact loggedIn={state.loggedIn} path="/payment" component={PaymentSuccess} />
          {/* <Route exact loggedIn={state.loggedIn} path="/payment" component={PaymentSuccess} /> */}
      
          <Route exact path="/" component={Home} />          
          <Route exact path="/product-view" component={ProductView} />
          <Route exact path="/login" render={(props)=>
            state.loggedIn ? <Redirect to="/" /> : <Login {...props} /> }
          />
          <Route exact path="/register" render={(props)=>
            state.loggedIn ? <Redirect to="/" /> : <Register {...props} /> }
          />
          <Route component={PageMissing} />

        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
