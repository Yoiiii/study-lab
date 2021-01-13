import React,{Component} from 'react'
class Child extends Component{
  state={
    age:8
  }
  render(){
    let {name,setName}=this.props
    let {age}=this.state
    return (<div>
      <p>姓名:<input 
                type="text" 
                placeholder="请输入新名字"
                value={name}
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                >
                  </input></p>
      <p>{name}</p>
      <p>年龄:<input 
                type="text" 
                placeholder="请输入新年龄" 
                value={age}
                onChange={(e)=>{
                  this.setState({
                    age:e.target.value
                  })
                }}
                ></input></p>
                <p>{age}</p>
    </div>)
  }
}
export default Child