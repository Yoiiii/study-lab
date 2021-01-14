import React, { Component } from 'react'
class Child extends Component {
  state ={
    age:8
  }
  componentDidMount(){
    // console.log(box2.innerHTML);
  }
  render() {
    let { name, setName } = this.props
    let { age } = this.state
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
      <button onClick={()=>{
        this.setState({
          age:10
        })
        let box2 =document.querySelector("#box2")
        console.log(box2.innerHTML);
      }}>故意出错</button>
    </div>)
  }
}
export default Child 