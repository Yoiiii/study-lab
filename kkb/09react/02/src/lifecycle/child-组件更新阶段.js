import React, { Component } from 'react'
class Child extends Component {
  state ={
    age:8
  }
  componentWillReceiveProps(nextProps){
    console.log(0,"父组件更新引起子组件更新",nextProps,this.props);
  }
  // nextProps 新的props nextState新的state
  shouldComponentUpdate(nextProps,nextState){
    console.log(1,"组件更新",nextProps,nextState,this.props,this.state);
    return true//true 接着向下执行生命周期，false 不再更新
  }
  componentWillUpdate(nextProps,nextState){
    console.log(2,"组件即将更新");
  }
  componentDidUpdate(prevPros,prevState){
    console.log(4,"组件更新完成",prevPros,prevState,this.props,this.state);
  }
  render() {
    let { name, setName } = this.props
    let { age } = this.state
    console.log(3,"正在更新");
    return (<div>
      <p>姓名:<input
        type="text"
        placeholder="请输入新名字"
        value={name}
        onChange={(e) => {
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
      ></input>
      </p>
      <p>{age}</p>
    </div>)
  }
}
export default Child 