import React, { Component ,useState} from 'react'

// class State extends Component{
//   state={
//     name:'leo',
//     age:18
//   }
//   setAge=()=>{
//     let {age}=this.state
//     this.setState({
//       age:++age
//     })
//   }
//   render(){
//     let {name,age}=this.state
//     return (<div>
//       姓名:{name},<br/>
//       年龄:{age},<br/>
//       <button onClick={this.setAge}>长大一岁</button>
//     </div>)
//   }
// }

function State() {  
  const [age,setAge] =useState(18)
  const [name,setName] =useState('leo')
  // const [state,setState] =useState({
  //   name:'leo',
  //   age:18
  // })
  
  return (<div>
           姓名:{name},<br />
           年龄:{age},<br />
    <button onClick={()=>{
      // setState({
      //   ...state,
      //   age:state.age+1
      // })
      setAge(age+1)
    }}>长大一岁</button>
  </div>);
}


export default State;
