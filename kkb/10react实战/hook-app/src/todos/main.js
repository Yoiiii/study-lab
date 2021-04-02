import React from 'react'


function Li(){
  return (
    <li className="">
      <div className="view" style={{display:'block'}}>
        <input className="toggle" type="checkbox"/>
        <label>3132</label>
        <a className="destory"></a>
      </div>
      <input className="edit" type="text" value="" style={{display:'none'}}></input>
    </li>
  )
}
function Main(){
  return (
    <section id="main" style={{display:"block"}}>
      <input id="toggle-all" type="checkbox" checked=""/>
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
        <ul id="todo-list">
          <Li/>
        </ul>
    </section>
  )
}

export default Main