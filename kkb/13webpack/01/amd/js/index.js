/**
 * 1.独立作用域
 *    - 闭包
 *    - 怎么内部的私有数据暴露
 * 2.加载依赖
 *    - 如何加载其他模块
 */

define(["./fn.js"],function(fn){
  let buttom = document.querySelector("button")
  console.log(fn);
  buttom.onclick= fn
})
// import fn from './fn'
// let button = document.querySelector("button")
// button.onclick=()=>{
//   fn()
// }

// function fn1(){
  
// }

// console.log("index.js");