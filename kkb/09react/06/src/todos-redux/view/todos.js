import React from 'react'
import Li from "./li"
import {connect} from 'react-redux'
function Todos(props){
  console.log(props);
  let {state} =props
  return (<ul id="todo-list">
    {state.map(item=><Li data={item} key={item.id}/>)}
  </ul>)
}

export default connect((state)=>{
  return {
    state
  }
})(Todos)