import React ,{PureComponent} from 'react';
class State extends PureComponent{
  render(){
    let {data}=this.props
    let doneData =data.filter(item=>item.done)
    let undoneData = data.filter(item=>!item.done)
    return(
      <div id ="todo-stats">
        <span className="todo-count">
          <span className="number">{undoneData.length}</span>
          <span className="word">项待完成</span>
        </span>
        {doneData.length<1?"":<span className="todo-clear">
          <a href="#">
            Clear <span>{doneData.length}</span>已完成事项
          </a>
        </span>}
      </div>
    )
  }
}
export default State