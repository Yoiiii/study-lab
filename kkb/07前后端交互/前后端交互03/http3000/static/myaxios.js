//1.混入模式：2.拦截器3.适配器
let util ={
  extends(a,b,context){
    for(let key in b){
      if(b.hasOwnProperty(key)){
        if(typeof b[key]==='function'){
          a[key]=b[key].bind(context)
        }else{   
          a[key]=b[key]
        }
      }
    }
  }
}

class Axios {
  //构造函数
  constructor() {
    this.Interceptors={
      request:new IntercepterMannger(),
      response:new IntercepterMannger()
    }
  }
  request(config) {
    let chain =[this.xhr,undefined]
    this.Interceptors.request.handles.forEach(Intercepter=>{
      chain.unshift(Intercepter.fulfilled,Intercepter.reject)
    })
    this.Interceptors.response.handles.forEach(Intercepter=>{
      chain.push(Intercepter.fulfilled,Intercepter.reject)
    })
    let promise =Promise.resolve(config)
    while(chain.length>0){
      promise=promise.then(chain.shift(),chain.shift())
    }
    return promise
  }
  xhr(config){
    return new Promise(resolve => {
      //
      //发送请求
      let xhr = new XMLHttpRequest()
      //合并配置
      let { url = "", data = null, method = "get", headers = {} } = config
      xhr.open(method, url, true)
      xhr.onload = function () {
        //console.log(xhr.responseText);
        resolve(xhr.responseText)
      }
      xhr.send(data)
    })
  }
}

//拦截器管理器：
class IntercepterMannger{
  constructor(){
    this.handles=[]
  }
  use(fulfilled,reject){
    this.handles.push(fulfilled,reject)
  }
}

//快捷创建其余方法
let methodArr=["get","post","put","delete","options","patch"]
methodArr.forEach(method=>{
  Axios.prototype[method]=function(url,data=null){
    let config = {  
      method:method,
      url:url,
      data:data
    }
    config[method]=method
    return this.request(config)
  }
})
//console.dir(Axios);

function createInstance(){
  //先实例化
  let context =new Axios()
  let Instance = context.request.bind(context)
  //console.dir(Instance);
  //混入方法
  util.extends(Instance,Axios.prototype,context)
  //混入实例对象的属性
  util.extends(Instance,context)
  //把类的Prototype上的方法混入(扩展)到Instance
  console.dir(Instance);
  return Instance
}
let axios =createInstance()//=>Axios.request
//axios()