import React, { Component } from 'react'
import Child from "./child"
class App extends Component {
  state = {
    name: 'dlx',
    isShow: true,
  }
  setName = (name) => {
    this.setState({
      name
    })
  }
  static getDerivedStateFromErroe(err) {
    console.log(err);
    return {
      err:false
    }
  }
  componentDidCatch(err,info){
    console.log(err,info);
  }
  render() {
    let { isShow, err } = this.state
    if(err){
      return <div>出错了</div>
    }else{
      return (<div>
        {
          err ? "程序出错了，正在祭天程序员" : <div>{isShow ? <Child name={this.state.name} setName={this.setName}></Child> : "组件被卸载了"}
            <button onClick={() => {
              this.setState({
                isShow: !isShow
              })
            }}>卸载</button>
          </div>
        }
      </div>)
    }

  }
}
export default App