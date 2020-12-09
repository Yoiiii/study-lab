const Koa = require("koa")
const Router =require("koa-router")
const views =require("koa-views")
const static =require("koa-static")
let app =new Koa()
let router =new Router()
router.get('/',(ctx,next)=>{
  ctx.redirect("/index")
})
router.get('/index',async (ctx,next)=>{
  // ctx.body="新闻页面"
  await ctx.render("index.pug")
})
router.get('/getData/:id',(ctx,next)=>{
  console.log(ctx.params.id);
  ctx.body={
    name:"张三",
    age:20
  }
})
// get 地址栏请求 srcript sec=" "  img src =""
// get:获取数据 post:添加数据 put:更新数据 delete:删除数据

//RESTful 设计架构接口:
// 添加 http://localhost/addUser
// 删除 http://localhost/delUser
//添加：http://localhost/user(post)
//查询：http://localhost/user(get)

app.use(views(__dirname+"/views"),{
  extension:"pug"
})
app.use(router.routes())
app.use(static(__dirname+"/static",{ // 3.配置静态资源
  prefix: '/static'
}))
app.listen(3004)