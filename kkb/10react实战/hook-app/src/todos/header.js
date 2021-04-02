import React, { useState } from 'react'

function Header(props){
  const [todo,setTodo]=useState("")
  let {addTodo}=props
  return (<header id="create-todo">
    <h1>Todos</h1>
    <input  
      type="text"
      placeholder="what needs to be done?"
      value={todo}
      onChange={(e)=>{
        setTodo(e.target.value)
      }}
      onKeyDown={(e)=>{
        if(e.keyCode===13){
          if(!todo.trim()){
            alert("请输入内容")
            e.target.focus()
          }else{
            addTodo(todo)
            setTodo("")
          }
        }
      }}
      />
  </header>)
}
export default Header