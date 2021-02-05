import React,{PureComponent} from 'react'
import Li from "./li"
class Todos extends PureComponent{
  render(){
    let {data}=this.props
    return(
      <ul id="todo-list">
      {data.map(item=>
        <Li key={item.id} {...this.props}  data={item}/>
      )}
    </ul>
    )
  }
}

export default Todos