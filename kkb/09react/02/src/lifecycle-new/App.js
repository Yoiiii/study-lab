import React,{Component} from 'react'
import Child from "./child"
class App extends Component{
  state={
    name:'dlx',
    isShow:true,
  }
  setName=(name)=>{
    this.setState({
      name
    })
  }
  render(){
    let {isShow} = this.state
    return (<div>
      {isShow?<Child name={this.state.name} setName={this.setName}></Child>:"组件被卸载了"}
      <button onClick={()=>{
        this.setState({
          isShow:!isShow
        })
      }}>卸载</button>
    </div>)
  }
}
export default App