import React,{useState} from 'react';
import Header from './header'
import Main from './main'
import Footer from './footer'
import './index.css'

function Todos(){
  const [todos,setTodos]=useState([])
  function addTodo(val){
    setTodos([...todos,{
      id:Date.now(),
      val,
      completed:false
    }])
  }
  function changeCompleted(id,completed){
    todos.forEach(item=>{
      if(item.id===id){
        item.completed=completed
      }
      setTodos([...todos])
    })
  }
  function remove(id){
    setTodos(todos.filter(item=>{
      return item.id!==id
    }))
  }
  function editVal(id,val){
    todos.forEach(item=>{
      if(id===item.id){
        item.val=val
      }
    })
  }
  return (<div id="todoapp">
    <Header addTodo={addTodo}/>
    <Main 
      todos={todos}
      changeCompleted={changeCompleted}
      remove={remove}
      editVal={editVal}
      />
    <Footer/>
  </div>)
}

export default Todos