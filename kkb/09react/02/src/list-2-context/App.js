import React,{Component} from 'react'
import './index.css'
import List from './list'
class App extends Component{
  state={
    openChild:"family",//记录当前是哪个字组件展开
    data:{
      family:{
        title:'家人',
        list:[
          {name:'爸爸'},
          {name:'妈妈'}
        ]
      },
      friend:{
        title:'朋友',
        list:[
          {name:'张三'},
          {name:'李四'},
          {name:'王五'}
        ]
      },
      costomer:{
        title:'客户',
        list:[
          {name:'腾讯'},
          {name:'阿里'},
          {name:'头条'}
        ]
      }
    }
  }
  setOpen=(openChild)=>{
    this.setState({
      openChild
    })
  }
  render(){
    let {data,openChild} =this.state
    return (<div className="friend-list">
      {Object.keys(data).map((item,index)=>{
        return <List 
        key={item} 
        name={item}
        />
      })}
    </div>)
  }
}
export default App