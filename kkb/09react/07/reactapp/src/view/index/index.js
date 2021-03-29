import React,{useEffect} from 'react'
import {Layout,List} from 'antd'
import IndexMenu from './indexMenu'
import {useLocation,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getList} from '../../store/action/index';
import qs from 'qs'
//parse : tab=share&page=2 转成 {tab:"share",page:2}
//stringify:{tab:"share",page:2} 转成  tab=share&page=2 
function Index() {
  let {loading,data}=useSelector(state=>state.list)
  let dispatch=useDispatch()
  let {search} =useLocation()
  useEffect(()=>{
    dispatch(getList(qs.parse(search.substr(1))))
  },[search])
  return (
    <div>
      <Layout.Content className="main">
        <List
          header={<IndexMenu/>}
          dataSource={data}
          loading={loading}
          renderItem={item =>{
            return(
              <List.Item>
                <Link to={"/topci/"+item.id}>{item.title}</Link>
              </List.Item>
            )
          }}
        ></List>
      </Layout.Content>
    </div>
  );
}
export default Index;
  