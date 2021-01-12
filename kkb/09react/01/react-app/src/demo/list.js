import React, { Component } from 'react'
/*
  1.把视图和数据进行绑定
  2.在适当的时候修改状态
*/
export default class List extends Component {
  state = {
    show: false
  }
  render() {
    console.log("this.props", this.props);
    let { show } = this.state
    let { data } = this.props
    let { list, title } = data
    return (
      <dl className={"friend-group " + (show ? "expanded" : "")}>
        <dt onClick={() => {
          this.setState({
            show: !show
          })
        }}>{title}</dt>
        {list.map((item, index) => {
          return <dd key={index}>{item.name}</dd>
        })}
      </dl>
    )
  }
}