import React from 'react'
import "./static/index.css"
import Create from './view/create'
import State from './view/state'
import Title from './view/title'
import Todos from './view/todos'
 export default function App(){
   return <div id="todoapp">
     <Title/>
     <div className="content">
       <Create />
       <Todos/>
       <State/>
     </div>
   </div>
 }