import React,{PureComponent} from "react"
import "./alert.css"
class Alert extends PureComponent{
  state ={
    show:true
  }
  hide=()=>{
    this.setState({
      show:false
    })
  }
  render(){
    let {show}=this.state
    // let {title,children,Child}=this.props
    // console.log(this.props);
    let {title,cb}=this.props
    return <div id="alert" style={{
      display :show?"block":"none"
    }}>
      <header className="alert-header">{title}</header>
      {/* {children} */}
      {/* <Child hide={this.hide}></Child> */}
      {cb({hide:this.hide})}
    </div>   
  }
}
export default Alert 