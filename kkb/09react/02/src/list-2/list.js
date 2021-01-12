import React,{Component} from 'react'
//之前我们控制组件的展开收缩，是在当前组件中
//现在我希望在当前组件中，可以控制其他组件收缩
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