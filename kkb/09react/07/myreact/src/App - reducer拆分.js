
import React,{useEffect} from "react"
import {useSelector ,useDispatch} from "react-redux"

function App() {
  const state=useSelector(state=>state)
  const dispatch=useDispatch()
  console.log(state);
  useEffect(()=>{
    setTimeout(()=>{
      dispatch({
        type:"ADD"
      })
    },2000)
  },[])
  return (
    <div className="App">
      hello react
    </div>
  );
}

export default App