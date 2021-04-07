import React from 'react'
import Header from './header';
import Menu from './menu';
export default function Frame(props){
  return (
    <div>
      <Header/>
      <Menu/>
      <div id="main">
        {props.children}
      </div>
    </div>
  )
}