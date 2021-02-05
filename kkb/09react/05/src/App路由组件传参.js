import { format } from "mysql2";
import React,{useState} from "react"
import {Link,Route} from 'react-router-dom';
import Index from './view/index'
import About from './view/about'
import Join from './view/joinus'
import Detail from './view/joinus_detail'

/*
  route 的 render属性:
    1.如果我们想要给路由里的组件进行传参那就要调用组件的render 方法
    2.render 方法接受的参数是一个函数，在函数必须有一个返回值，返回值是我们要渲染的对应组件
 */
function App(props) {
  const [user,setUser]=useState("dlx")
  return (
    <div className="App">
      <nav>
        <Link to="/">首页</Link>
        <span>|</span>
        <Link to="/about">关于我们</Link>
        <span>|</span>
        <Link to="/about/detail">关于我们详情</Link>
        <span>|</span>
        <Link to="/join">加入我们</Link>
        <span>|</span>
        <Link to="/login">登录</Link>
        <span>|</span>
      </nav>
      <div>
        <Route path="/" exact component={Index}/>
        <Route path="/about" exact render={(props)=>{
          return (
            <About {...props} user={user}/>
          )
        }}/>
        <Route path="/about/detail" exact component={Detail}/>
        <Route path="/join" exact component={Join}/>
      </div>
    </div>
  );
}

export default App;