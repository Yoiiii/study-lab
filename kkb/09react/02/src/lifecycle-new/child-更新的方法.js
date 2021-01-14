import React, { Component } from 'react'
class Child extends Component {
  constructor(props){
    super(props)
    this.state ={
      age:8
    }
    console.log(1,"初始化");
  }
  // 利用getDerivedStateFromProps 替代了componentWillMount 和 compontWillReceiveProps
  static getDerivedStateFromProps(props,state){
    console.log(props,state,"组件即将挂载");
    return true //
  }
  componentDidMount(){
    console.log(4,"组件被渲染到DOM");
  }
  //组件更新之后，即将重新渲染DOM
  getSnapshotBeforeUpdate(){
    let box = document.querySelector("#box")
    console.log(box.innerHTML);
    return box.innerHTML
  }
  componentDidUpdate(prevPros,prevState,prevInfo){
    let box = document.querySelector("#box")
    console.log(box.innerHTML,prevInfo.innerHTML);
  }
  render() {
    console.log(3,"向DOM中渲染");
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
    </div>)
  }
}
export default Child 