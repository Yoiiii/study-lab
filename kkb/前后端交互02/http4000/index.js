const Koa =require("koa")
const static = require("koa-static")
const Router =require("koa-router")
const koaBody=require("koa-body")

let app = new Koa()
app.use(static(__dirname+"/static"))
let router =new Router()
//处理预检请求
router.options("/getData",ctx=>{
  ctx.set("Access-Control-Allow-Origin","http://localhost:3000")
  ctx.set("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorizaton,Accept,mytest")
  ctx.body=""
})

router.get("/",ctx=>{
  ctx.body="some value..."
})
router.all("/getData",ctx=>{
  // ctx.set("Access-Control-Allow-Origin","*")//不能设置跨域携带凭证withCredentials
  ctx.set("Access-Control-Allow-Origin","http://localhost:3000")//设置运行跨域请求的地址
  ctx.set("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorizaton,Accept,mytest")//设置跨域请求能添加的请求头
  ctx.set("Access-Control-Expose-Headers","Date")//设置跨域请求能接收的header值
  ctx.set("Access-Control-Max-Age",600);//设置预检请求的有效期
  console.log("接收到了3000端口的请求");
  ctx.body="4000端口的数据"
})
router.get("/proxy",ctx=>{
  ctx.body="proxy 返还的数据"
})
app.use(router.routes())
app.listen(4000,console.log("http://localhost:4000"))