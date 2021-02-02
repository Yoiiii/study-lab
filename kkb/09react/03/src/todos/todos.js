import React,{PureComponent} from 'react'
import Li from "./li"
class Todos extends PureComponent{
  render(){
    let {data,changeDone}=this.props

    return(
      <ul id="todo-list">
      {data.map(item=>
        <Li changeDone={changeDone} key={item.id} data={item}/>
      )}
    </ul>
    )
  }
}

export default Todos