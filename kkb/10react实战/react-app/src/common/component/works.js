import React from 'react'

export default function Works(props) {
  let { data, loading, loadEnd } = props
  return (
    <div className="works">
      <h3>学员作品</h3>
      <ul className="works_list clearfix">
        {
          // data.map((item,index) => {
          //   <li key={index}>
          //     <a href="#">
          //       <img src={item.icon}></img>
          //       <span className="wrork_txt clearfix">
          //         <strong>{item.title}</strong>
          //         <span>
          //           <em>{item.message}</em>
          //           <em>{item.good}</em>
          //         </span>
          //       </span>
          //     </a>
          //   </li>
          // })
        }
      </ul>
      <a className="more">{loadEnd?"没有更多了..":(loading?"正在加载中":"上滑加载更多")}</a>
    </div>
  )
}

