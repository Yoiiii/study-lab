import React,{useEffect} from 'react'
import {Layout,List,Pagination} from 'antd'
import IndexMenu from './indexMenu'
import {useLocation,Link,useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getList} from '../../store/action/index';
import qs from 'qs'
//parse : tab=share&page=2 转成 {tab:"share",page:2}
//stringify:{tab:"share",page:2} 转成  tab=share&page=2 
function Index() {
  let {loading,data}=useSelector(state=>state.list)
  let dispatch=useDispatch()
  let {search} =useLocation()
  search =qs.parse(search.substr(1))
  let history = useHistory()
  let {page=1,tab="all"}=search
  useEffect(()=>{
    dispatch(getList(search))
  },[tab,page])
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
          // pagination={{
          //   onChange:page=>{
          //     console.log(page);
          //   },
          //   pageSize:10,//一页显示多少条
          // }}
          footer={
          <Pagination 
            total={1000}
            showTotal={(total,range)=>{
              if(range[0] !== Number(page)){
                let query = qs.stringify({...search})
                query= qs.parse(query)
                query.page=range[0]
                console.log(search);
                console.log(qs.stringify(query));
                history.push('/?'+qs.stringify(query))
              }
              return `${range[0]}-${range[1]} of ${total} items`
            }}
            pageSize={1}
            defaultCurrent={Number(page)}

             />}
        ></List>
      </Layout.Content>
    </div>
  );
}
export default Index;
  