import React,{Component} from 'react'
import dd from './dd'
export default class List extends Component{
  render(){
    let {data,isOpen,name,setOpen,parent}=this.props
    return (<dl className={`friend-group ${isOpen?"expanded":""}`}>
      <dt onClick={()=>{
        setOpen(name)
        // parent.setState({
        //   openChild:name
        // })
      }}>{data.title}</dt>
      {data.list.map((item,index)=>{
        return <dd key={index}>{item.name}</dd>
      })}
    </dl>)
  }
}