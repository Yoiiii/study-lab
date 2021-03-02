import React  from 'react';
function State (){
    return(
      <div id ="todo-stats">
        <span className="todo-count">
          <span className="number">0</span>
          <span className="word">项待完成</span>
        </span>
        <span className="todo-clear">
          <a 
          href="#"
          >
            Clear <span></span>已完成事项
          </a>
        </span>
      </div>
    )
  }
export default State