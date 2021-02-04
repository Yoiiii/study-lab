import React ,{useState,useEffect}from "react"
/*
 *  useEffect 副作用
 *  useEffect(cb)
 *  useEffect(cb,[依赖1,依赖2])
 * 
 *  useEffect 相当于componentDidMout、componentDidUpdate 和 componentWillUnmount 的综合体
 * 
 *  只希望在组件挂载后执行某些事情(componentDidMount)
 */
function Child(props){
  const {name,setName}=props
  const [age,setAge]=useState(8)
  useEffect(()=>{
    console.log("组件挂载完成之后");
    return ()=>{
      console.log("组件即将卸载时执行");
    }
  },[])
  useEffect(()=>{
    console.log("组件挂载完成之后及更新完成之后");
  })
  return (<div>
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
