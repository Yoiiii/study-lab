const Koa =require("koa")
const static = require("koa-static")
const Router =require("koa-router")
const koaBody=require("koa-body")
const axios =require("axios")

let app = new Koa()
app.use(static(__dirname+"/static"))
let router =new Router()
router.get("/",ctx=>{
  ctx.body="run with 3000"
})
router.all("/getData",ctx=>{
  console.log(ctx.request.koaBody);
  ctx.body={
    name:"zhang3",
    age:20
  }
})
router.get("/changeRequest",ctx=>{
  axios.get("http://localhost:5000/axios").then(res=>{
    console.log(res);
  })
  ctx.body={
    value:"返还的数据"
  }
})
app.use(router.routes())
app.listen(3000,console.log("http://localhost:3000"))