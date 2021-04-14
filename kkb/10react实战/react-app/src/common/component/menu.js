import React from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from '../../router/route_list'

export default function Menu(props) {
  const { menuHide } = props
  return (
    <nav id="menu">
      {nav.map((item, index) => {
        return <NavLink 
            key={index} 
            className={item.className} 
            to={item.path} 
            exact={item.exact}
            activeClassName="active"
            onTouchEnd={() => {
            menuHide()
        }}>{item.name}</NavLink>
      })}
    </nav>
  )
} 