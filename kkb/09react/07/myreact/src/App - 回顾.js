import {connect} from 'react-redux'

function Child(props){
  let {nub,dispatch}=props
  return (<div>
    <p>数字:{nub}</p>
    <button onClick={()=>{
      dispatch({type:"ADD"})
    }}>增加</button>
  </div>)
}
Child = connect(state=>state)(Child)

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Child/>
    </div>
  );
}

export default App