// function fn(){
//   // ...
// }

// module.exports.fn=fn

(function(root,factory){
  if(typeof module ==="object"&& typeof module.exports==="object"){
    //Node,CommonJS-like
    module.exports=factory(require('jquery'))
  }else if(typeof define ==="function" &&define.amd){
    //AMD 模块环境下
    define(['jquery'],factory)
  }
}(this,function($){
  $('div')
  //
  function b(){}
  return{
    b:b,
    c:c
  }

}))