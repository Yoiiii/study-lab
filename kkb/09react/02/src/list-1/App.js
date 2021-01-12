import React,{Component} from 'react'
import './index.css'
import List from './list'
class App extends Component{
  state={
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
  render(){
    let {data} =this.state
    return (<div className="friend-list">
      {Object.values(data).map((item,index)=>{
        return <List data={item} key={index}/>
      })}
    </div>)
  }
}
export default App