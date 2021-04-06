import React, { useState,useEffect,useRef } from 'react'

function Main(props){ 
  let {todos,changeCompleted,remove,editVal}=props
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
           return <Li key={item.id} inner={item} changeCompleted={changeCompleted} remove={remove} editVal={editVal}/>
          })} 
        </ul>
    </section>
  )
}

function Li(props){
  const [edit,setEdit]=useState(false)
  const elEdit = useRef(null)
  let {inner,changeCompleted,remove,editVal} = props
  useEffect(()=>{
    if(edit){
      elEdit.current.select()
    }else{
      
    }
  },[edit])
  return (
    <li className={inner.completed?"done":""}>     
      <div className="view" style={{display:edit?"none":"block"}}>
        <input 
          className="toggle" 
          type="checkbox"
          checked ={inner.completed}
          onChange={
            (e)=>{
              changeCompleted(inner.id,e.target.checked)
            }
          }
          />
        <label className="todo-content" onDoubleClick={()=>{
          setEdit(true)
        }}>{inner.val}</label>
        <a className="todo-destroy" onClick={()=>{
          remove(inner.id)
        }}></a>
      </div>
      <input 
        ref={elEdit}
        type="text" 
        className="edit"
        value={inner.val} 
        style={{display:edit?"block":"none"}}
        onBlur={()=>{
          setEdit(false)
        }}
        onChange={(e)=>{
          editVal(inner.id,e.target.value)
        }}
        >
        </input>
    </li>
  )
}

export default Main