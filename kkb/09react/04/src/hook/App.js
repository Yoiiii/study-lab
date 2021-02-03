import React, { useState } from "react"
import Child from "./Child"
// use 开头的都是hook
/**
 * useState 状态
 *  [state,setState]=useState(initState)
 *      state当前对应的状态
 *      setState 修改这个state的方法
 */
function App() {
  // const [name,setName] =useState("dlx")
  // const [age,setAge]=useState(8)
  const [state,setState]=useState({
    name:'dlx',
    age:8
  })
  return (
    <div className="App">
      {/* <Child 
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
      /> */}
      <Child state={state} setState={setState}/>
      <button>卸载</button>
    </div>
  );
}

export default App;
