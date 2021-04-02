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
  return (<div id="todoapp">
    <Header addTodo={addTodo}/>
    <Main/>
    <Footer/>
  </div>)
}

export default Todos