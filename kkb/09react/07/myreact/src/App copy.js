
import React,{useEffect} from "react"
import {useSelector ,useDispatch,useStore} from "react-redux"

function App() {
  const list = useSelector(state=>state.list)
  const store =useStore()
  let dispatch = useDispatch()
  let prevDispatch = dispatch
  dispatch = (action)=>{
    // 第一种情况直接修改 reducer
    if(typeof action ==="object"){
      prevDispatch(action)
      console.log();
    }else{
    //第二种情况，经过一些副作用之后，再去修改reducer
      action(dispatch)
    }
  }
  useEffect(()=>{
      // dispatch({
      //   type:"ADD"
      // })
      dispatch((dispatch)=>{
        setTimeout(()=>{
          dispatch({type:"ADD"})
        },2000)
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