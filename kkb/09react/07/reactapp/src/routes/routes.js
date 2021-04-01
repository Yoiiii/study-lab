import React from 'react'
import Index from '../view/index/index'
import GetStart from '../view/getstart/index'
import About from '../view/about/index'
import Topic from '../view/topic/' 
import User from '../view/user'
import Login from '../view/login'
import View404 from '../view/view404'
const routes=[
  {
    title:'首页',
    path:'/',
    exact:true,
    render(...props){
      return (<Index {...props}/>)
    },
    isNav:true
  },
  {
    title:'新手入门',
    path:'/getstart',
    exact:false,
    render(...props){
      return (<GetStart {...props}/>)
    },
    isNav:true
  },
  {
    title:'关于',
    path:'/about',
    exact:false,
    render(...props){
      return (<About {...props}/>)
    },
    isNav:true
  },
  {
    title:'登录',
    path:'/login',
    exact:false,
    render(...props){
      return (<Login {...props}/>)
    },
  }, 
  {
    title:'文章详情',
    path:'/topic/:id',
    exact:false,
    render(...props){
      return (<Topic {...props}/>)
    },
  },
  {
    title:'用户详情',
    path:'/user/:username',
    exact:false,
    render(...props){
      return (<User {...props}/>)
    },
  }, 
  {
    title:'404',
    path:'',
    exact:false,
    render(...props){
      return (<View404 {...props}/>)
    }
  }
]

export default routes