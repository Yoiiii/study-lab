class Axios{
  constructor(){
    
  }
  request(config){
    //发送请求
    let xhr=new XMLHttpRequest()
    //合并配置
    let {url="",data=null,method="get",headers={}}=config
    xhr.open(method,url,true)
    xhr.onload=function(){
      console.log(xhr.responseText);
    }
    xhr.send(data)
  }
}