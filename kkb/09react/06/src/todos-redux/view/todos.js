import React from 'react'
import Li from "./li"
import {connect} from 'react-redux'
function Todos(props){
  console.log(props);
  let {state,dispatch} =props
  return (<ul id="todo-list">
    {state.map(item=><Li data={item} key={item.id} dispatch={dispatch}/>)}
  </ul>)
}

export default connect((state)=>{
  return {
    state
  }
})(Todos)