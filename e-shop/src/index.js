import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import TopHeader from './Components/Inc/TopHeader'
import HeaderBottom from './Components/Inc/HeaderBottom'
import Navigation from './Components/Inc/Navigation'
import Banner from './Components/Inc/Banner'
import Advertisement from './Components/Inc/Advertisement'
import Middle from './Components/Inc/Middle'
import Footer from './Components/Inc/Footer'
import Copyright from './Components/Inc/Copyright'


ReactDOM.render(
  <React.StrictMode>
    
    <TopHeader />
    <HeaderBottom />
    <Navigation />
    <Banner />
    <Advertisement />

    <App />

    <Middle />
    <Advertisement />
    <Footer />
    <Copyright />    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
