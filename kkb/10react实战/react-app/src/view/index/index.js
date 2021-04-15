import React, { useState,useEffect } from 'react'
import { connect } from "react-redux"
import Tab from '../../common/component/tab'
import Works from '../../common/component/works'
import Frame from '../../common/component/frame'
import "../../common/css/index.css"
import getWorks from '../../store/action/getWorks'

let imgData = [
  require("../../common/images/tab/img1.png"),
  require("../../common/images/tab/img2.png"),
  require("../../common/images/tab/img3.png"),
  require("../../common/images/tab/img4.png")
]
function Index(props) {
  const [page,setPage] = useState(1)
  let {dispatch} =props
  function getWorksData(){
    let p =dispatch(getWorks(page))
    setPage(page+1)
    return p
  }
  useEffect(()=>{
    getWorksData()
  },[])
  return (
    <Frame  
      pullUp={true}
      getData={getWorksData}
      >
      <div>
        <Tab
          data={imgData}
          render={(data) => {
            return <img src={data} />
          }}
        />
        <section className="index_content">
          <Works {...props}/>    
        </section>
      </div>
    </Frame>
  )
}

export default connect(props =>({...props.works}))(Index) 