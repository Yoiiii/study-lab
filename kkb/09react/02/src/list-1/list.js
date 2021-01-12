import React,{Component} from 'react'
export default class List extends Component{
  state={
    isOpen:false
  }
  render(){
    let {data}=this.props
    let {isOpen}=this.state
    return (<dl className={`friend-group ${isOpen?"expanded":""}`}>
      <dt onClick={()=>{
        this.setState({
          isOpen:!isOpen
        },()=>{
          console.log("状态更新完毕");
        })
      }}>{data.title}</dt>
      {data.list.map((item,index)=>{
        return <dd key={index}>{item.name}</dd>
      })}
    </dl>)
  }
}