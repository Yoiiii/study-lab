import React,{PureComponent} from "react"
import Alert from "./alert"
class Btn extends PureComponent{
  render(){
    console.log(this.props);
    return <button onClick={()=>{
      this.props.hide()
    }}>关闭</button>
  }
}
class App extends PureComponent{
  render(){
    return <div>
      {/* <Alert
        title="Alert"
      >
        <Btn></Btn>
      </Alert> */}
      {/* <Alert title="Alert" Child={Btn}/> */}
      <Alert title="Alert" cb={(props)=>{
        return <Btn {...props}/>
      }}/>
    </div>
  }
}
export default App