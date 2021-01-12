import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './demo/app'

let arr = [
  {
    id: 0,
    name: 'a'
  },
  {
    id: 1,
    name: 'b'
  },
  {
    id: 3,
    name: 'c'
  },
  {
    id: 4,
    name: 'd'
  },
]
/*
列表渲染时一定记得写 key 属性：
如果这数组中的数据后期会被操作，一定记得key值不要用索引
*/
// ReactDOM.render(
//   <div>{arr.map((item,index)=>{
//     return <p key={item.id}>这是第{index}项:{item.name}</p>
//   })}</div>,
//   document.getElementById('root')
// );

/*
  必须有且只有一个顶层的包含元素
*/
// ReactDOM.render(
//   <div>
//     <div>1</div>
//     <div>2</div>
//   </div>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div className="warp">
//     <div>1</div>
//     <div>2</div>
//   </div>,
//   document.getElementById('root')
// );

//sytle 注意style 接收一个对象
  let str = "warp"
// let style ={
//   background:"red",
//   width:"100px",
//   height:'200px'
// }
// ReactDOM.render(
//   <div className={str}>
//     <label htmlFor="#box"></label>
//     <div style={style}>1</div>
//     <div>2</div>
//   </div>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <App data={arr} name="kkb" title="asdf" />,
  document.getElementById('root')
);
reportWebVitals();
