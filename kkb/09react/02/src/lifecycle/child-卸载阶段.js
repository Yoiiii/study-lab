import React, { Component } from 'react'
class Child extends Component {
  state ={
    age:8
  }
  componentDidMount(){
    window.onresize=()=>{
      let box = document.querySelector("#box")
      let newChild = document.createElement("div")
      newChild.innerHtml = window.innerWidth
      box.appendChild(newChild)
    }
  }
  componentWillUnmount(){
    console.log("组件即将被卸载");
    window.onresize=null
  }
  render() {
    let { name, setName } = this.props
    let { age } = this.state
    console.log(3,"正在更新");
    return (<div id="box">
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