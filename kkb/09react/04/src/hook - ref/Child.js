import React ,{useState,useEffect,useRef}from "react"
/*
    useRef(defaultVal)
    1.获取真实DOM
    2.记录组件更新前的值
 */
function Child(props){
  const {name,setName}=props
  const [age,setAge]=useState(8)
  const div = useRef(null)
  const preVal = useRef({
    name,
    age
  })
  // useEffect(()=>{
  //   console.log(div);
  //   console.log(preVal,name,age);
  //   preVal.current={
  //     name,
  //     age
  //   }
  // })
  useEffect(()=>{
    if(!preVal.current){
      console.log("更新");
    }else{
      console.log("挂载");
      preVal.current=false
    }
  })
  return (<div ref={div}>
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
