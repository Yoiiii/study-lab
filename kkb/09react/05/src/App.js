import React, { useState } from "react"
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import "./index.css"

import router from "./router/router"
function App(props) {
  const [user, setUser] = useState("dlx")
  return (
    <div className="App">
      <nav className="nav">
        {
          router.filter(item => item.isNav).map((item, index) => {
            return (<NavLink
              to={item.path}
              key={index}
              activeClassName="hover"
              activeStyle={{
                lineHeight:"30px"
              }}
            >{item.title}</NavLink>)
          })
        }
      </nav>
      <div>
        <Switch>
          {router.map((item, Index) => {
            return <Route key={Index} path={item.path} exact={item.exact} render={(props) => {
              return item.render(props)
            }} />
          })}
        </Switch>
      </div>
    </div>
  );
}

export default App;