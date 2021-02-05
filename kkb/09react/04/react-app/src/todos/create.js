import React,{useState} from 'react'
function Create(props){
  let [val,setVal]=useState("")
  let {addData}=props
  return (
    <div id="create-todo">
      <input id="new-todo"  
      placeholder="What needs to be done?" 
      autoComplete="off"
      type="Text" 
      value={val}
      onChange={(e)=>{
        setVal(e.target.value)
      }}
      onKeyDown={(e)=>{
        if(e.keyCode===13){
          if(val.trim()===""){
            alert("清输入内容")
            return
          }
          addData(val) 
          setVal(e.target.value)
        }
      }}/>
    </div>
  )
}
export default Create