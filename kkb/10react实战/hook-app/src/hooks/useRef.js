import React, { Component, useState, useEffect,useRef } from 'react'

// class Txt extends Component{
//   componentWillUnmount(){
//     console.log("组件即将卸载");
//   }
//   render(){
//     let {text,setEdit}=this.props
// return (
//   <div>{text} <a onClick={()=>{
//     setEdit(true)
//   }}>编辑</a></div>
// )
//   }
// }

// class Effect extends Component{
//   state={
//       text:"这是今天的课程",
//       edit:false
//   }
//   setEditState=(state)=>{
//     this.setState({
//       edit:state
//     })
//   }
//   componentDidMount(){
//     console.log("组件挂载完毕");
//   }
//   componentDidUpdate(){
//     console.log("组件更新完毕");
//   }
//   render(){
//     let {text,edit} =this.state
// return (<div>
//   {edit?
//     <input 
//       type="text"
//       value={text}
//       onChange={
//         (e)=>{
//           this.setState({
//             text:e.target.value
//           })
//         }
//       }
//       onBlur={
//         ()=>{
//           this.setEditState(false)
//         }
//       }
//       />
//     :
//     <Txt text={text} setEdit={this.setEditState}/>
//   }
// </div>)
//   }
// }

function Txt(props) {
  let { text, setEdit } = props
  // useEffect(() => {
  //   console.log("组件状态有变化了");
  //   return () => {
  //     console.log('111');
  //   }
  // })
  return (
    <div>{text} <a onClick={() => {
      setEdit(true)
    }}>编辑</a></div>
  )
}

function Eidt(props){
  let {text,setText,setEdit}=props
  let t =useRef(null)
  function toScroll(){
    let txt =document.querySelector("#txt")
    let y=window.scrollY
    t.current.style.transform=`translateY(${y}px)`
  }
  useEffect(()=>{
    window.addEventListener("scroll",toScroll)
    t.current.select()
    return ()=>{
      console.log("组件卸载的时候");
      window.removeEventListener("scroll",toScroll)
    }
  },[])
  return (
    <input
        type="text"
        value={text}
        id="txt"
        ref={t}
        onChange={
          (e) => {
            setText(e.target.value)
          }
        }
        onBlur={
          () => {
            setEdit(false)
          }
        }
      />
  )
}

// function Ref() {
//   const [text, setText] = useState("这是今天的课程")
//   const [edit, setEdit] = useState(false)
//   //只监听 edit 发生改变
//   useEffect(() => {
//     console.log("状态有改变");
//   },[edit])
//   return (<div>
//     {edit ?
//       <Eidt text={text} setEdit={setEdit}  setText={setText}/>
//       :
//       <Txt text={text} setEdit={setEdit} />
//     }
//     {[...(".".repeat(100))].map((item, index) => {
//       return <div key={index}>页面内容填充</div>
//     })}
//   </div>)
// }

function Ref() {
  const [nub,setNub] =useState(0)
  const prev=useRef(nub)
  useEffect(()=>{
    prev.current=nub
  })
  return (<div>
    <p>当前值:{nub}</p>
    <p>上次值:{prev.current}</p>
    <button onClick={()=>{
      setNub(nub+1)
    }}>递增</button>
  </div>)
}


export default Ref;
