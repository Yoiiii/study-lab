const Koa =require("koa")
const static = require("koa-static")
const Router =require("koa-router")
const koaBody=require("koa-body")
const koaServerHttpProxy=require("koa-server-http-proxy")

let app = new Koa()
app.use(static(__dirname+"/static"))
app.use(koaServerHttpProxy('/api', {//遇到api开头的，转换进入target的链接，并且将/api转换成“”
  target: 'http://localhost:4000',
  pathRewrite: { '^/api': '' }
}))
let router =new Router()
router.get("/",ctx=>{
  ctx.body="proxy代理服务器..."
})
router.get("/getData",ctx=>{
  ctx.body="3000端口的数据"
})
// router.get("/proxy",ctx=>{
//   ctx.body="proxy 返还的数据"
//   //let request =http.request(url,options,res=>{
//   //   res.on("data")
//   // })
//   //request.write()request.end()
// })
app.use(router.routes())
app.listen(5000,console.log("http://localhost:5000"))