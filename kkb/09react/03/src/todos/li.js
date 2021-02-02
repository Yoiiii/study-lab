import React,{PureComponent} from 'react'
class Li extends PureComponent{
  render(){
    let {data,changeDone}=this.props
    let {done,txt}=data
    return(
      <li>
        <div className={"todo " + (done?"done":"")}>
          <div className="display">
            <input className="check" type="checkbox" checked={done}></input>
            <div className="todo-content">{txt}</div>
            <span className="todo-destory"></span>
          </div>
          <div className="edit">
            <input className="todo-input" type="text" value={txt}></input>
          </div>
        </div>
      </li>
    )
  }
}

export default Li