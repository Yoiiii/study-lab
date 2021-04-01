import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTopic } from '../../store/action/index';
import { useLocation } from 'react-router-dom'
import { PageHeader, Descriptions, Skeleton, Divider,List ,Avatar,Layout} from 'antd'
import {
  LikeOutlined
} from '@ant-design/icons';
import "moment/locale/zh-cn"
const moment = require("moment")
moment.locale('zh-cn')
function Topic() {
  let { loading, data } = useSelector(state => state.topic)
  console.log(loading, data);
  let { pathname } = useLocation()
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopic(pathname.split("/")[2]))
  }, [pathname])
  return (
    <Layout.Content className="site-layout-content" style={{ padding: '0 0' }}>
      {loading ? (
        <Skeleton />
      ) : (
        <Skeleton loading={loading}>
          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title={data.title}
            subTitle={"作者:" + data.author.loginname}
          >
            <Descriptions size="small" column={4}>
              <Descriptions.Item label="发布于">{moment(data.create_at).fromNow()}</Descriptions.Item>
              <Descriptions.Item label="浏览">
                {data.visit_count}次
              </Descriptions.Item>
              <Descriptions.Item label="最后一次编辑是">{moment(data.last_reply_at).fromNow()}</Descriptions.Item>
              <Descriptions.Item label="来自">{data.tab === "share" ? "分享" : "问答"}</Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <Divider style={{ marginTop: '0' }} />
          <div style={{ padding: '0 24px' }} dangerouslySetInnerHTML={{ __html: data.content.replace(/<img/g, '<img width="100%"') }} />
          <List
          style={{ padding: '0 24px' }}
            itemLayout="horizontal"
            dataSource={data.replies}
            header={<h3>评论:{data.replies.length}</h3>}
            renderItem={item => (
              <List.Item
              actions={[<div><LikeOutlined />{item.ups.length}</div>]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.author.avatar_url} />}
                  title={<a href="https://ant.design">{item.author.loginname}</a>}
                  description={<div dangerouslySetInnerHTML={{ __html: item.content}} ></div>}
                />
              </List.Item>
            )}
          />
        </Skeleton>
      )}
    </Layout.Content>
  );
}
export default Topic;
