import * as React from 'react'

interface iMyComponentProps {
  value:number;
}

export default class Child extends React.Component<iMyComponentProps>{

  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>sss</div>
    )
  }
}