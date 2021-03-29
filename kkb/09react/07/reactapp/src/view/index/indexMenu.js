import React from 'react';
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
function IndexMenu(){
  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["all"]}
      >
        <Menu.Item key="all">
          <Link to={"/?tab=all"}>全部</Link>
        </Menu.Item>
        <Menu.Item key="good">
          <Link to={"/?tab=good"}>精华</Link>
        </Menu.Item>
        <Menu.Item key="share">
          <Link to={"/?tab=share"}>分享</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default IndexMenu