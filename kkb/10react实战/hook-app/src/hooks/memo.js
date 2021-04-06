import React, { useState,useMemo, useEffect} from 'react'

function Memo() {  
  const [age,setAge] =useState(10)
  const [name,setName] =useState('leo')
  // let age2=(()=>{
  //   return age>=18?"成年人":"未成年"
  // })()
  let age2=useMemo(()=>{
    console.log(1);
    if(age>=18){
      return "成年人"
    }else{
      return "未成年"
    }
  },[age<18])
  return (<div>
           姓名:{name},<br />
           年龄:{age},<br />
           年龄阶段:{age2},<br/>
    <button onClick={()=>{
      setAge(age+1)
    }}>长大</button>
  </div>);
}


export default Memo;
