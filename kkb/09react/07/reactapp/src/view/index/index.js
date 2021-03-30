import React,{useEffect} from 'react'
import {Layout,List,Pagination} from 'antd'
import IndexMenu from './indexMenu'
import {useLocation,Link,useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getList} from '../../store/action/index';
import qs from 'qs'
function Index() {
  let {loading,data}=useSelector(state=>state.list)
  let dispatch=useDispatch()
  let {search} =useLocation()
  search =qs.parse(search.substr(1))
  let history = useHistory()
  let {page=1,tab="all",limit="10"}=search

  useEffect(()=>{
    dispatch(getList(search))
  },[tab,page,limit])

  return (
    <div>
      <IndexMenu/>
      <Layout.Content className="main">
        <List
          dataSource={data}
          loading={loading}
          renderItem={item =>{
            return(
              <List.Item>
                <Link to={"/topci/"+item.id}>{item.title}</Link>
              </List.Item>
            )
          }}
          footer={
          <Pagination 
            total={1000}
            onChange={(page, pageSize)=>{
              console.log(page, pageSize);
              search.page=page
              search.limit=pageSize
              history.push('/?'+qs.stringify(search))
            }}
            pageSize={limit}
            defaultCurrent={Number(page)}

             />}
        ></List>
      </Layout.Content>
    </div>
  );
}
export default Index;
  