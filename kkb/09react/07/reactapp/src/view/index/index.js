import React, { useEffect } from 'react'
import { Layout, List, Pagination, Skeleton, Avatar, Tag, Card } from 'antd'
import IndexMenu from './indexMenu'
import { useLocation, Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../../store/action/index';
import qs from 'qs'
import "moment/locale/zh-cn"
const moment = require("moment")
moment.locale('zh-cn')

function Index() {
  let { loading, data } = useSelector(state => state.list)
  let dispatch = useDispatch()
  let { search } = useLocation()
  search = qs.parse(search.substr(1))
  let history = useHistory()
  let { page = 1, tab = "all", limit = "10" } = search
  useEffect(() => {
    dispatch(getList(search))
  }, [tab, page, limit])

  let tag = (item) => {
    if (item.top) {
      return <Tag color="rgb(128,189,1)">置顶</Tag>
    } else if (item.tab === "share") {
      return <Tag>分享</Tag>
    } else if (item.tab === "ask") {
      return <Tag>问答</Tag>
    }
  }
  return (
    <Layout>
      <Layout.Content className="site-layout-content" style={{ padding: '0 0' }}>
        <IndexMenu />
        <List
          style={{ padding: '0 24px' }}
          dataSource={data}
          renderItem={item => {
            return (
              <List.Item
                actions={[<div>{moment(item.last_reply_at).fromNow()}</div>]}
              >
                <Skeleton avatar title={false} loading={loading} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar src={item.author.avatar_url} />
                    }
                    title={<Link to={"/topic/" + item.id}>{tag(item)}
                      {item.title}</Link>}
                    description={
                      <div>
                        <a style={{ "color": 'rgb(158,120,192)' }}>{item.reply_count}</a>
                        <a style={{ "color": '#000' }}>/</a>
                        <a style={{ "color": 'rgb(180,180,180)' }}>{item.visit_count}</a>
                      </div>
                    }
                  />
                </Skeleton>
              </List.Item>
            )
          }}
          footer={
            <Pagination
              total={1000}
              onChange={(page, pageSize) => {
                search.page = page
                search.limit = pageSize
                dispatch({
                  type: 'LIST_EDITLIMIT',
                  limit: pageSize
                })
                history.push('/?' + qs.stringify(search))
              }}
              pageSize={limit}
              defaultCurrent={Number(page)}

            />}
        ></List>
      </Layout.Content>
      <Layout.Sider className="site-layout-sider" style={{ width: "600px" }}>
        <Card title="关于" size="small" bordered={false} >
          <p>基于React仿写conde.js</p>
          <p>提供基本的查看功能</p>
          <p><a href="https://shawyoi.cn/">shawyoi.cn</a></p>
          <p><a href="https://cnodejs.org/">cnode.js</a></p>
        </Card>
      </Layout.Sider>
    </Layout>
  );
}
export default Index;
