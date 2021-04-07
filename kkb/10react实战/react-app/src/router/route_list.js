import React from 'react'
import Index from '../view/index/index'
import Course from "../view/course/index"
import Lecturer from "../view/lecturer/index"
import Login from "../view/login/index"
import Work from "../view/work/index"

const routeList=[
  {
    name:"首页",
    path:"/",
    exact:true,
    render(props){
      return <Index {...props}/>
    }
  },
  {
    name:"课程安排",
    path:"/course",
    exact:false,
    render(props){
      return <Course {...props}/>
    }
  },
  {
    name:"讲师团队",
    path:"/lecturer",
    exact:false,
    render(props){
      return <Lecturer {...props}/>
    }
  },
  {
    name:"登录",
    path:"/login",
    exact:true,
    render(props){
      return <Login {...props}/>
    }
  },
  {
    name:"作品详情",
    path:"/work",
    exact:false,
    render(props){
      return <Work {...props}/>
    }
  }
]

export default routeList