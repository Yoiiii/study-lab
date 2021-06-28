const Koa = require('koa')
const KoaRouter = require('koa-router')  

const app = new Koa()
const router = new KoaRouter()

router.get('/getdata',async ctx=>{
    ctx.body='test'
})



app.use(router.routes())


app.listen(8888)