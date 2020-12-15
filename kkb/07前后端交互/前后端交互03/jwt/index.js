const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
const jwt = require("jsonwebtoken");
const koajwt = require("koa-jwt");
const mysql2 = require("mysql2");
let app  = new Koa();
app.use(static(__dirname+"/static"));
app.use(koaBody());
// const connection = mysql2.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"123",
//     database:"js04"
// })

let router = new Router();
router.options("/(.*)",ctx=>{
    ctx.set("Access-Control-Allow-Origin","http://localhost:3000")
    ctx.set("Access-Control-Allow-Credentials",true);
    ctx.set("Access-Control-Allow-Headers","content-type,Content-Length,Authorizaton,Accept,withcredentials,authorization")
    ctx.body=""
})
router.get("/",ctx=>{
    ctx.body = "proxy代理服务器...";
})
router.post("/checkUser",async ctx=>{
    ctx.set("Access-Control-Allow-Origin","http://localhost:3000")
    ctx.set("Access-Control-Allow-Credentials",true);
    ctx.set("Access-Control-Allow-Headers","content-type,Content-Length,Authorizaton,Accept,withcredentials,authorization")
    let {username,pwd} = ctx.request.body;
    console.log(username,pwd);
    //let [rows] = await connection.promise().query("SELECT * FROM users WHERE username=? AND pwd=?",[username,pwd]);
    // console.log(rows);
    let rows =[{name:"name"}]
    let resData;
    if(rows.length>0){
        // 用户名且密码正确；
        // 签发token；
       let token =  jwt.sign({
            name:"some value"
        },"mytoken",{expiresIn:"2h"});
        resData = {
            info:"用户名密码正确",
            status:1,
            token
        }
    }else{
        resData = {
            info:"用户名或者密码错误",
            status:0
        }
    }
    ctx.body = resData;
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic29tZSB2YWx1ZSIsImlhdCI6MTU3Mjk2NDQ3MiwiZXhwIjoxNTcyOTcxNjcyfQ.g4gimJZmW1UHvecdu4A7IA4wtGHSVpu5TcW2ab5UYq8"
})

router.post("/checkApi",koajwt({secret:"mytoken"}),ctx=>{
    ctx.set("Access-Control-Allow-Credentials",true);
    ctx.set("Access-Control-Allow-Origin","http://localhost:3000")
    ctx.set("Access-Control-Allow-Headers","content-type,Content-Length,Authorizaton,Accept,withcredentials,authorization")
    ctx.body = {
        test:"value.."
    };
})
router.get("/axios",ctx=>{
    ctx.body = {
        value:"5000返还的数据"        
    }
})
app.use(router.routes());
app.listen(5000,console.log("http://localhost:5000"));