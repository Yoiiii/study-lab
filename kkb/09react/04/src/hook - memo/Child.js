import React ,{useState,useMemo,useEffect}from "react"

function Child(props){
  const {name,setName}=props
  const [age,setAge]=useState(8)
  const val = useMemo(()=>{
    console.log("组件即将挂载及即将更新");
    return `姓名:${name},年龄:${age}`
  },[name,age])
  // console.log(val);
  useEffect(()=>{
    console.log("组件挂载完成或更新完成");
  })
  console.log("组件挂载");
  return (<div>
    <p>{val}</p>
    <p>name:{name}<br/>
    <input 
      type="text" 
      value={name} 
      onChange={({target})=>{
        setName(target.value)
    }}>
    </input>
    </p>
    <p>age:{age}<br/>
    <input 
      type="text" 
      value={age} 
      onChange={({target})=>{
        setAge(target.value)
    }}>
    </input>
    </p>
  </div>)
}
export default Child;
