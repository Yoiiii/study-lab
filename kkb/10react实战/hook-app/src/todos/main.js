import React from 'react'

function Main(props){
  let {todos}=props
  return (
    <section 
      id="main" 
      style={{display:todos.length>0?"block":"none"}}
      >
      <input id="toggle-all" type="checkbox" checked=""/>
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
        <ul id="todo-list">
          {todos.map((item)=>{
           return <Li key={item.id} inner={item.value}/>
          })} 
        </ul>
    </section>
  )
}

function Li(props){
  let {inner} = props
  return (
    <li className="">
      <div className="view" style={{display:'block'}}>
        <input className="toggle" type="checkbox" />
        <label>{inner}</label>
        <a className="destory"></a>
      </div>
      <input className="edit" type="text" value="" style={{display:'none'}}></input>
    </li>
  )
}

export default Main