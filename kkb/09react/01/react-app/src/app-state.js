import React from "react"
// state 状态
// setState()
/**
 * setState( )修改组件的state
 *      -setState({
 *      要修改的satate
 * })
 *      -setState(function(){
 * })
 * state:
 * 1.调用setState 之后会修改组件的state ，并且会重新渲染组件内容
 * 2.同一地方多次调用setState React会对操作进行合并 只渲染一次
 */

/*
  react 添加事件 主要两个问题
    1.事件名称注意大小写(驼峰)
    2.事件处理函数的this 默认是undefined
    3.如果要获取当前元素可以获取 e.target
 */


class App extends React.Component{
  state={
    name:'kkb',
    age:8
  }
  setAge=()=>{
    console.log(this);
  }
  render(){
    console.log(this.state);
    let {data}=this.props
    let {name,age}=this.state
    return (<div>
      {data.map(item=><p key={item.id}>这是{item.name}</p>)}
      <div>
        姓名:{name}<br/>
        年龄：{age}
      </div>
      <button onClick={(e)=>{
        //console.log(e.target);
        // this.setState({
        //   age:++age
        // })
        // this.setState({
        //   name:'kkbb'
        // })
        this.setState(function(){
          return {
            age:++age
          }
        })
      }}>又大了一岁</button>
    </div>)
  }
}

export default App