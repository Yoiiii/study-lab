import React, { useState } from "react"
import { NavLink, Route, Switch } from 'react-router-dom';
import "./index.css"

import router from "./router/router"
function App(props) {
  const [user, setUser] = useState("")
  return (
    <div className="App">
      <nav className="nav">
        {
          router.filter(item => item.isNav).map((item, index) => {
            return (<NavLink
              to={item.isDynmic?item.to:item.path}
              key={index}
              exact
              activeClassName="hover"
              activeStyle={{
                lineHeight:"30px"
              }}
              isActive={(match,location)=>{
                //console.log(match,location,item);
                
                if(item.path===location.pathname){
                  return true
                }
                else return false
              }}
            >{item.title}</NavLink>)
          })
        }
        {user?<span>
          用户名:{user+"    "}
          <button onClick={()=>{
            setUser("")
          }}>注销</button>
        </span>:""}
      </nav>
      <div>
        <Switch>
          {router.map((item, Index) => {
            return <Route key={Index} path={item.path} exact={item.exact} render={(props) => {
              props = {user,setUser,...props}
              return item.render(props)
            }} />
          })}
        </Switch>
      </div>
    </div>
  );
}

export default App;