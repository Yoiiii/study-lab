import React,{useState,useRef,useEffect} from 'react'
function Li(props){
  console.log(props);
  let {data,dispatch}=props
  let {txt,id,done}= data
  const [edit,setEdit]=useState(false)
  const [inputVal,setInputVal] =useState(txt)
  const input = useRef()
  useEffect(()=>{
    if(edit){
      input.current.focus()
    }
  },[edit])
  return ( 
    <li className={edit?"editing":""}>
      <div className={"todo " + (done?"done":"")}>
        <div className="display">
          <input className="check" type="checkbox" checked={done} onChange={({target})=>{
            dispatch({
              type:'DONE',
              id,
              done:target.checked
            })
          }}></input>
          <div className="todo-content" onDoubleClick={()=>{
            setInputVal(txt)
            setEdit(true)
          }}>{txt}</div>  
          <span className="todo-destory" onClick={()=>{
            dispatch({
              type:'REMOVE',
              id
            })
          }}>x</span>
        </div>
        <div className="edit">
          <input 
          className="todo-input"
          type="text"
          value={inputVal}
          ref={input}
          onChange={({target})=>{
            setInputVal(target.value)
          }}
          onBlur={()=>{
            if(inputVal.trim()){
              dispatch({
                type:'EDIT',
                id:id,
                txt:inputVal
              })
            }
            setEdit(false)
          }}
          ></input>
        </div>
      </div>
    </li>
  )
}
export default Li 