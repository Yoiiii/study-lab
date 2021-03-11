
import React,{useEffect} from "react"
import {useSelector ,useDispatch,useStore} from "react-redux"
import Axios from "axios"
function App() {
  const list = useSelector(state=>state.list)
  const dispatch =useDispatch()
  const {page,tab,limit} = list
  useEffect(()=>{
    // dispatch({
    //   type:"ADD"
    // })
    dispatch((dispatch,getState)=>{
      // setTimeout(()=>{
      //   dispatch({
      //     type:"ADD"
      //   })
      // },2000)
      Axios.get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=${limit}&tab=${tab}`).then((res)=>{
        console.log(res.data);
        dispatch({
          type:"ADD",
          data:res.data
        })
      })
    })
  },[])
  console.log(JSON.stringify(list));
  return (
    <div className="App">
      hello react
    </div>
  );
}

export default App 