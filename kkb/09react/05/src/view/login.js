import React,{useState,useMemo} from 'react';
function Login(props){
  const [name,setName]=useState("")
  const {setUser,history}= props
  // useMemo(()=>{
  //    if(user){
  //     history.push("/")
  //     //在JS中去做跳转
  //     //history.push("跳转路径",state)
  //    }
  // },[])
  return (<div>
      <input 
        text="text" 
        value={name}
        onChange={({target})=>{
          setName(target.value)
        }}
      />
      <button onClick={()=>{
        if(!name.trim()){
          alert("请输入用户名")
        }else{
          alert("登录成功")
          setUser(name)
          setTimeout(()=>{
            history.goBack()
          },1000)
        }
      }}>登录</button>
  </div>

  )
}
export default Login