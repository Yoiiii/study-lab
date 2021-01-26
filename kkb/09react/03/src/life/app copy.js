import React ,{Component} from "react"
class Child extends Component{
  // constructor(props){
  //   super(props)
  //   this.state={
  //     age:8      
  //   }
  //   console.log(1,"初始化","挂载阶段");
  // }
  // static getDerivedStateFromProps(props,state){
  //   //拿到了Props或者Props做了更新，在这里如果state和Props有关联，可以在这里进行关联
  //   console.log(2,"即将挂载或即将更新",props,state);
  //   return true
  // }
  // componentDidMount(){
  //   console.log(4,"已经挂载进DOM");
  // }

  state={
    age:8
  }
  static getDerivedStateFromProps(props,state){
    console.log(1,"即将挂载","挂载阶段或即将更新");
    return true
  }
  shouldComponentUpdate(){
    console.log(2,"即将挂载","自身状态发生变化");
    return true
  }
  // componentWillUpdate(){
  //   console.log(3,"即将挂载","即将更新");
  // }
  getSnapshotBeforeUpdate(){
    console.log(5,"组件更新完毕即将重新渲染DOM");
    let wrap =document.querySelector("#warp")
    return wrap.innerHTML
  }
  componentDidUpdate(prevPorps,prevState,prevInfo){
    console.log(6,"组件更新完成");
    console.log(prevPorps,prevState,prevInfo);
  }
  render(){
    console.log(3,"开始把内容渲染进DOM");
    let {name,setName}=this.props
    let {age}=this.state
    return <div id="warp">
      <p>
        name:<input type="text" value={name} onChange={(e)=>{
          setName(e.target.value)
        }}></input>
      </p>
      <p>
        age:<input type="number" value={age} onChange={(e)=>{
          this.setState({
            age:e.target.value
          })
        }}></input>
      </p>
      <p>
        name:{name}<br/>
        age:{age}
      </p>
    </div>
  }
}
class App extends Component{
  state={
    name:"dlx"
  }
  setName=(name)=>{
    this.setState({
      name
    })
  }
  render(){
    let {name} =this.state
    return <div>
      <Child name={name} setName={this.setName}/>
    </div>
  }
}
export default App