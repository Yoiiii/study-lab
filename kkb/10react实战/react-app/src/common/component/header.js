import React, { useEffect ,useState} from 'react'
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { useBack } from "../../common/hook/index"
import isLogin from '../../store/action/isLogin'
import logout from '../../store/action/logout'

function Header(props) {
  const back = useBack(props.history)
  const path = props.location.pathname
  const { user,changeShow } = props
  const [isBtnShow,setBtnShow] =useState(false)
  useEffect(() => {
    props.dispatch(isLogin())
  }, [])

  function getUser() {
    if (path === "/login") {
      return ""
    }
    if (user) {
      return <span className="header-btn-right">
        <span className="header-user" onClick={()=>{
          setBtnShow(!isBtnShow)
        }}>
          {user}
        </span>
        <spam
          style={{display:isBtnShow?"block":"none"}} 
          className="header-logout-btn" onClick={()=>{
          props.dispatch(logout())
        }}>
          退出
        </spam>
      </span>
    } else {
      return <Link className="user" to="/login"></Link>
    }
  }
  return (
    <header id="header">
      <nav className="menu">
        {path === "/login" ? <a className="header-btn-left iconfont icon-back" onClick={() => {
          back()
        }}></a> : <a className="header-btn-left iconfont icon-hycaidan" onClick={()=>{
          changeShow()
        }}></a>}
      </nav>
      <h1 className="logo">shawyoi.cn</h1>
      {getUser()}
    </header>
  )
}

export default connect(state => {
  return { user: state.getUser }
})(withRouter(Header))