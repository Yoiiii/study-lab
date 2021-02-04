import { BrowserRouter, HashRouter, Link,Route } from 'react-router-dom'
import Index from './view/index';
import About from './view/about';
import JoinUs from './view/joinus';
import JoinDetail from './view/joinus_detail';
function App() {
  /*
    BrowserRouter
    /  首页
    /about 关于
    /join 加入我们
    HashRouter
    #/  首页
    #/about 关于
    #/join 加入我们
   */
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">首页</Link>
          <span>|</span>
          <Link to="/about">关于我们</Link>
          <span>|</span>
          <Link to="/join">加入我们</Link>
          <span>|</span>
          <Link to="/join/detail">加入我们</Link>
        </nav>
      </div>
      <div>
        {/*
          注意:只定义path 它的匹配规则就是判断现在的url中是否包含了path 中定义的路径 
          exact 精确匹配
         */}
        <Route path="/" exact component={Index}/>
        <Route path="/about" component={About}/>
        <Route path="/join" component={JoinUs}/>
        <Route path="/join/detail" component={JoinDetail}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
