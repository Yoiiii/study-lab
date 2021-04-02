import React from 'react'
function Footer(){
  return (
  <footer style={{display:"block"}}>
    <a id="clear-completed" style={{display:"none"}}>
      Clear 0 completed
    </a>
    <div id="todo-count">10 items left</div>
  </footer>)
}
export default Footer