import React from 'react'
function Li(props){
  console.log(props);
  let {data}=props
  let {txt,id,done}= data
  return (
    // <li className={"editing"}>
    <li >
      <div className={"todo " + (done?"done":"")}>
        <div className="display">
          <input className="check" type="checkbox" checked={done} onChange={()=>{

          }}></input>
          <div className="todo-content" >{txt}</div>  
          <span className="todo-destory">1</span>
        </div>
        <div className="edit">
          <input 
          className="todo-input"
          type="text"
          value={txt}
          onChange={()=>{

          }}
          ></input>
        </div>
      </div>
    </li>
  )
}


export default Li 