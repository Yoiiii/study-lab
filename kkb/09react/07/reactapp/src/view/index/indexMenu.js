import React from 'react';
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
function IndexMenu(){
  let {limit}= useSelector(state=>state.list)
  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["all"]}
      >
        <Menu.Item key="all">
          <Link to={"/?tab=all&limit"+limit}>全部</Link>
        </Menu.Item>
        <Menu.Item key="good">
          <Link to={"/?tab=good&limit"+limit}>精华</Link>
        </Menu.Item>
        <Menu.Item key="share">
          <Link to={"/?tab=share&limit"+limit}>分享</Link>
        </Menu.Item>
        <Menu.Item key="ask">
          <Link to={"/?tab=ask&limit"+limit}>问答</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default IndexMenu