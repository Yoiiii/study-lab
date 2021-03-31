import React from 'react'
import RouteList from '../routes/routes';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from "react-router-dom"
function Header() {
    let { pathname } = useLocation()
    let index = RouteList.filter(item => item.isNav).findIndex(item => item.path === pathname).toString()
    return (<Layout.Header style={{"flexWrap":'nowrap' }}>
        <Link to="/">
            <img src={require("../static/img/logo.svg").default} alt="logo" id="logo" />
        </Link>
        <Menu
            theme='dark'
            mode="horizontal"
            defaultSelectedKeys={[index]}
            style={{ lineHeight: '64px' }}
        >
            {RouteList.filter(item => item.isNav).map((item, index) => {
                return (<Menu.Item key={index}>
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                </Menu.Item>)
            })}
        </Menu>
    </Layout.Header>)
}
export default Header