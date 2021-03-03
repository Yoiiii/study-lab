import {useStore,useDispatch,useSelector} from 'react-redux'

function Child(){
  const nub= useSelector((state)=>{
    return state.nub
  });
  const dispatch = useDispatch((state)=>{
    return state.nub
  })

  //console.log(useStore());
  return (<div>
    <p>数字:{nub}</p>
    <button onClick={()=>{
      dispatch({type:"ADD"})
    }}>增加</button>
  </div>)
}

function App() {
  return (
    <div className="App">
      <Child/>
    </div>
  );
}

export default App