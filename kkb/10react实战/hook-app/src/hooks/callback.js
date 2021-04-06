import React, { useState,useMemo, useEffect,useCallback} from 'react'

function CallBack() {  
  const [age,setAge] =useState(10)
  const [name,setName] =useState('leo')

  // let age2=useMemo(()=>{
  //   return ()=>age<18?"未成年":"成年人"
  // },[age<18])

  let age2=useCallback(()=>age<18?"未成年":"成年人",[age<18])
  return (<div>
           姓名:{name},<br />
           年龄:{age},<br />
           年龄阶段:{age2()},<br/>
    <button onClick={()=>{
      setAge(age+1)
    }}>长大</button>
  </div>);
}


export default CallBack;
