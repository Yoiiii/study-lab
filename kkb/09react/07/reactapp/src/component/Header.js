import React from 'react'
import RouteList from '../routes/routes';
import { Layout, Menu, Row, Col ,Button } from 'antd';
import { Link, useLocation ,useHistory} from "react-router-dom"
function Header() {
    let { pathname } = useLocation()
    let history = useHistory()

    let index = RouteList.filter(item => item.isNav).findIndex(item => item.path === pathname).toString()
    return (<Layout.Header>
        <Row wrap={false} >
            <Col flex="160px">
                <Link to="/">
                    <img src={require("../static/img/logo.svg").default} alt="logo" id="logo" />
                </Link>
            </Col>
            <Col flex="auto">
                <Row justify={"space-around"}>
                    <Col span={22}>                
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
                </Col>
                    {/* <Col span={2}>
                    <Button type={"primary"} onClick={()=>{
                        history.push("/login")
                    }}>登录</Button>
                    </Col> */}
                </Row>
                </Col>
        </Row>
    </Layout.Header>)
}
export default Header