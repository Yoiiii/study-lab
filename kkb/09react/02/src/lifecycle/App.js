import React,{Component} from 'react'
import Child from "./child"
class App extends Component{
  state={
    name:'dlx'
  }
  setName=(name)=>{
    this.setState({
      name
    })
  }
  render(){
    return (<div>
      <Child name={this.state.name} setName={this.setName}></Child>
    </div>)
  }
}
export default App