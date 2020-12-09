const Koa =require("koa")
const Router =require("koa-router")
const nunjucks=require("koa-nunjucks-2")
let app =new Koa()
let router = new Router()
app.use(nunjucks({
  ext:"html",//.推荐.njk
  path:__dirname+"/views",
  nunjucksConfig:{
    trimBlocks:true //防止Xss漏洞；
  }
}))
router.get("/",async ctx=>{
  // ctx.body="hello"
  await ctx.render("index",{
    username:"张三",
    num:2,
    arr:[{
      name:"张三",
      age:20
    },
    {
      name:"张2",
      age:24

    },{
      name:"张3",
      age:22

    }],
    str:"hello world"
  })
})
router.get("/son1",async ctx =>{
  await ctx.render("son1")
})
router.get("/import",async ctx =>{
  await ctx.render("import")
})
app.use(router.routes())
app.listen(3002)