import React,{useState} from 'react'
import {connect} from 'react-redux'
function Create(props){
  console.log(props);
  //let [val,setVal]=useState("")
  let {dispatch}=props
  return (
    <div id="create-todo">
      <input id="new-todo"  
      placeholder="What needs to be done?" 
      autoComplete="off"
      type="Text" 
      // value={val}
      // onChange={(e)=>{
      //   setVal(e.target.value)
      // }}
      defaultValue=""
      onKeyDown={(e)=>{
        if(e.keyCode===13){
          if(e.target.value.trim()===""){
            alert("清输入内容")
            return
          }
          dispatch({
            type:'ADD',
            val:e.target.value
          })
          e.target.value=""
        }
      }}/>
    </div>
  )
}
export default connect()(Create)