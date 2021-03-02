// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import { createStore } from 'redux'
/*
  createStore(reducer)

  reducer: 纯函数
    1.相同的输入永远返回相同的输出
    2.不修改函数的输入值
    3.不依赖外部环境作用
    4.无任何副作用
*/

function reducer(state = {
  nub: 1,
  name: 'dlx'
}, action) {
  //console.log(action);
  switch (action.type) {
    case "EDIT":
      return {
        ...state,
        nub: state.nub + 1
      }
  }
  return state
}

let store = createStore(reducer)
console.log(store.getState());
store.subscribe(()=>{
  console.log("发生修改了",store.getState());
})

setInterval(() => {
  store.dispatch({
    type: 'EDIT'
  })//1.默认情况下是一个同步操作
  //console.log(store.getState());

}, 1000)
/*
- getState() //获取当前store 存储的state
- dispatch(action)// 修改state
- subscribe(listener) //监听state 发生修改
- replaceReducer(nextReducer) //替换掉原来的reducer
 */