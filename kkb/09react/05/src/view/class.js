import React from 'react'
import {NavLink,withRouter,useHistory,useLocation,useRouteMatch,useParams} from 'react-router-dom'
import data from '../data'
const pageLen=3
const len = Math.ceil(data.length/pageLen)
function List (props){
  console.log(useRouteMatch());

  let {page}=useParams()
  console.log(props);
  return <div>
    {data.filter((item,index)=>{
      return ((page-1)*pageLen<=index)&&(index<page*pageLen)
    }).map((item)=>{
      return <li key={item.id}>{item.title}</li>
    })}
  </div>
}
// const List2 = withRouter(List)
// react 高阶组件 传入一个组件返回一个新组件
function ClassNav(props){
  return (<nav className="page-nav">
    {[...(".".repeat(len))].map((item,index)=>{
     return (
       <NavLink to={"/class/"+(index+1)} key={index} exact  isActive={(match,location)=>{
        if(props.match.params.page===(index+1).toString()){
          return true
        }
        else return false
      }}>
         {index+1}
       </NavLink>
     )
    })}
  </nav>)
} 
function Class(props){
  console.log(props);
  let {match}=props
  return (<div>
    <List page={match.params.page}/>
    <ClassNav {...props}></ClassNav>
  </div>)
}
// function Class(props){ 
//   return (<div>
//     <List2 />
//     <ClassNav {...props}></ClassNav>
//   </div>)
// }
export default Class