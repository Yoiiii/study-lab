import React from 'react'
import http from "../../store/action/http"
export default function Header() {
  http.post(
    "/lecturer/list?page=1&rows=20",
    {
      order: "desc",
      sort:"id",
      category_id:1,
      recommend:1
    }
  ).then((res)=>{
    console.log(res);
  })
  return (
    <header id="header">
      <nav className="menu">
        <a>导航</a>
      </nav>
      <h1 className="logo">shawyoi.cn</h1>
      <a className="user"></a>
    </header>
  )
}