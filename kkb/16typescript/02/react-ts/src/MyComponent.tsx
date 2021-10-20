import * as React from 'react'
import Child from './Child'

interface iMyComponentState {
  id:number;
}

export default class MyComponent extends React.Component<{},iMyComponentState>{

  constructor(props){
    super(props);

    this.state={
      id:1
    }
  }
  
  render(){
    this.state.id
    return(
      <div>
        <Child value={1}/>
      </div>
    )
  }
}