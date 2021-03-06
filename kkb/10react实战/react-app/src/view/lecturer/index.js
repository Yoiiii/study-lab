import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import Frame from '../../common/component/frame'
import LecturerTab  from './tab'
import Join from './join'
import "../../common/css/teacher.css"
import getLecturers from '../../store/action/getLecturers'

function Lecturer(props){
  let {data,dispatch}= props
  let newData = []
  for(let i =0;i<data.length;i+=3){
    let newArr=[]
    let end = i+3
    end=end>data.lenght?data.length:end
    for(let j = 1;j<end;j++){
      newArr.push(data[j])
    }
    newData.push(newArr)
  }
  console.log(data);
  useEffect(()=>{
    dispatch(getLecturers())
  },[])
  return (
    <Frame>
       <div className="teacher_banner">
         <h2><span>妙味团队</span></h2>
          <LecturerTab data={data} newData={newData}></LecturerTab>
          <Join></Join>
       </div>
    </Frame>
 )
}

export default connect(state=>state.lecturers)(Lecturer)