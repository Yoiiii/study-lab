import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTopic } from '../../store/action/index';
import {useLocation} from 'react-router-dom'
import Item from 'antd/lib/list/Item';
import {PageHeader} from 'antd'
function Topic() {
  let { loading, data } = useSelector(state => state.topic)
  console.log(data);
  let {pathname} = useLocation()
  let dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getTopic(pathname.split("/")[2]))
  },[pathname])
  let content = data.content.replace(/<img/g,'<img width="100%"')
  return (
    <div>
      <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />,
    <div dangerouslySetInnerHTML={{__html: content}}/>
    </div>
  );
}
export default Topic;
  