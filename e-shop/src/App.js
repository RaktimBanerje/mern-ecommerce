import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom' 
import authApi from '../src/services/api/auth.api'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import PageMissing from './components/pages/PageMissing'
import Register from './components/pages/Register'

export const UserContext = React.createContext()

function PrivateRoute ({component, loggedIn, ...rest}) {
  const Component = component
  return (
    <Route {...rest} render={(props)=> 
      loggedIn ? <Component {...props}/> : <Redirect to="/login" /> } />
  )
} 

const App = () => {  
  
  const [ state, setState ] = useState({
    loggedIn: false,
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
          
          <PrivateRoute exact path="/cart" loggedIn={state.loggedIn} />
          
          <Route exact path="/" component={Home} />

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
