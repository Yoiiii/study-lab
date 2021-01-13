import React, { Component } from 'react'
import Dd from './dd'
import Dt from './dt'
export default class List extends Component {
  render() {
    //console.log(this.props);
    let { Consumer } = this.props
    console.log(Consumer);
    return (<dl className={`friend-group `}>
      <Consumer>
      <Dd {...this.props} />
      </Consumer>
      <Dt {...this.props} />
      
    </dl>)
  }
}