import React, { Component } from 'react'
class Child extends Component {
  constructor(props){
    super(props)
    this.state ={
      age:8
    }
    console.log(1,"初始化");
  }
  componentWillUnmount(){
    console.log(2,"组件即将被渲染到DOM");
  }
  componentDidMount(){
    console.log(4,"组件被渲染到DOM");
  }
  render() {
    console.log(3,"向DOM中渲染");
    let { name, setName } = this.props
    let { age } = this.state
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