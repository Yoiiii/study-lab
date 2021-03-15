import React from 'react'
import {Switch,Route} from 'react-router-dom'
import routes from './index'

function RouteList(){
  return <Switch>
    {routes.map((item,index)=>{
      return <Route key={index} exact={item.exat} render={item.render}/>
    })}
  </Switch>
}
export default RouteList