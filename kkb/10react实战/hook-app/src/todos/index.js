import React from 'react';
import Header from './header'
import Main from './main'
import Footer from './footer'
import './index.css'

function Todos(){
  return (<div id="todoapp">
    <Header/>
    <Main/>
    <Footer/>
  </div>)
}

export default Todos