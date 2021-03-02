import {connect} from 'react-redux'
//高阶组件：传入一个组件，返回一个组件
function Inner(props) {
  //console.log(props);
  let {nub,dispatch}=props

  return (
    <div>
      <p>nub:  <strong>{nub}</strong></p>    
      <button onClick={()=>{
        dispatch({
          type:"ADD"
        })
      }}>加1</button>
    </div>
  );
}
 
export default connect((state,props)=>{
  //console.log(state,props);
  return {
    ...props,
    nub:state.nub
  }
})(Inner);

/*
connect((store.state,props)=>{
  // 允许对props 和 store 进行合并处理
  return{
    传递给组件的数据
  }
})(Inner);
 */

 /*
 connect(function(store中的state,父组件传入的props){
      return 要转递给组件的信息
 }(要包装的组件))

 connect 在组件中火族store 中的state和dispatch 方法
  */