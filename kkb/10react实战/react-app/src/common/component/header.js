import React from 'react'
import {connect} from "react-redux"
import {Link,withRouter} from "react-router-dom"
import {useBack} from "../../common/hook/index"
function getUser(path,user){
  if( path ==="/login"){
    return ""
  }
  if(user){
    return <span className="header-btn-right header-user">{user}</span>
  }else{
    return <Link className="user" to="/login"></Link>
  }
}
 function Header(props) {
  const back =useBack(props.history)
  const path =props.location.pathname
  const {user} =props
  console.log(user);
  return (
    <header id="header">
      <nav className="menu">
        {path==="/login"?<a className="header-btn-left iconfont icon-back" onClick={()=>{
          back()
        }}></a>:<a className="header-btn-left iconfont icon-hycaidan"></a>}
      </nav>
      <h1 className="logo">shawyoi.cn</h1>
      {getUser(path,user)}
    </header>
  )
}

export default connect(state=>{
  console.log(state);
  return {user:state.getUser}
})(withRouter(Header))