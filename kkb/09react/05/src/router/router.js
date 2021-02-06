import React from 'react'
import {Redirect} from 'react-router-dom'
import Index from '../view/index'
import About from '../view/about'
import Join from '../view/joinus'
import Detail from '../view/joinus_detail'
import View404 from '../view/404'
import Login from '../view/login'
import Class from '../view/class'

//路由表
let routeList =[
  {
    title:"首页",
    path:"/",
    exact:true,
    isNav:true,
    render:(props)=>{
      return (<Index  {...props}/>)
    }
  },
  {
    title:"关于我们",
    path:"/about",
    isNav:true,
    exact:true,
    render:(props)=>{
      return (<About  {...props}/>)
    }
  },
  {
    title:"关于我们详情",
    path:"/about/detail",
    exact:true,
    isNav:true,
    render:(props)=>{
      return (<Detail  {...props}/>)
    }
  },
  {
    title:"班级",
    path:"/class/:page",
    isDynmic:true,
    to:"/class/",
    exact:true,
    isNav:true,
    render:(props)=>{
      return (<Class {...props}/>)
    }
  },
  {
    title:"加入我们",
    path:"/join",
    exact:true,
    isNav:true,
    render:(props)=>{
      return (<Join  {...props}/>)
    }
  },
  {
    title:"登录",
    path:"/login",
    exact:true,
    isNav:true,
    render:(props)=>{
      //console.log(props.user);
      if(props.user!==""){
        return <Redirect to="/"/>
      }
      return (<Login  {...props}/>)
    }
  },
  {
    title:"404",
    path:"",
    exact:true,
    render:(props)=>{
      return (<View404 {...props}/>)
    }
  },
]

export default routeList