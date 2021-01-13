import React,{Component,createContext} from 'react'
import './index.css'
//import List from './list'
let myContext =createContext()
let {Provider,Consumer} = myContext
//Provider 放在要传递数据组件的最外层
class Div extends Component{
  render(){
    return <div>
      <P/>
    </div>
  }
}
class P extends Component{
  static contextType=myContext
  render(){
    return <p>
      <Consumer>
        {(props)=>{
          return <Span {...props}></Span>
        }}
      </Consumer>
    </p>
  }
}

//P.contextType=myContext
class Span extends Component{
  static contextType=myContext
  render(){
    return <Span>{this.props.family.title}</Span>
  }
}
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
    return (<Provider value={data}>
      <Div/>
    </Provider>)
  }   
}
export default App